import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, {
  useEffect, useRef, useState, forwardRef,
  useImperativeHandle,
} from "react";
import { AmbientLight, Vector3 } from 'three'
import { OrbitControls, PerspectiveCamera, Text, } from '@react-three/drei'
import './index.css'
import { Model } from './model'
import { Break } from 'three/tsl';

const CameraControls = forwardRef((props, ref) => {
  const isMobile = window.innerWidth < 768;
  const { camera } = useThree();
  // const speed = 0.1;
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0)
  const handleMouseClick = () => {
    console.log(camera.rotation);
    // // console.log()
  };
  useEffect(() => {
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("click", handleMouseClick);
    };

  }, [camera]); // No need for [camera] dependency


  const targetPositions = [
    isMobile ? new Vector3(10, 6.64, 1.92) : new Vector3(6.09, 6.64, 3.52), // startup
    isMobile ? new Vector3(-1.2, 3, -0.10) : new Vector3(-0.93, 3.36, -0.48), // teckStack
    new Vector3(-0.55, 2.97, -1.35), // About
    new Vector3(-1.95, 2.79, -0.03), // Contact
  ]

  const targetRotations = [
    [-0.8557, 1.2004, 0.8208],
    [-0.3056, 0.9293, 0.2476],
    [-0.3357, 0.0348, 0.0121],
    [-1.5526, 0.0621, 1.2864],
  ]

  // 👇 Expose functions via `ref`
  useImperativeHandle(ref, () => ({
    goToTeckStack: () => setCurrentTargetIndex(1),
    goToAbout: () => setCurrentTargetIndex(2),
    goToContact: () => setCurrentTargetIndex(3),
    goToStartup: () => setCurrentTargetIndex(0),
  }))


  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentTargetIndex < targetPositions.length - 1) {
      setCurrentTargetIndex((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentTargetIndex > 0) {
      setCurrentTargetIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      // window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentTargetIndex]);

  useFrame(() => {
    camera.position.lerp(targetPositions[currentTargetIndex], 0.05)
    const [x, y, z] = targetRotations[currentTargetIndex]
    camera.rotation.set(x, y, z)
  })
  return null;
});
const Scene = () => {
  // const isMobile = window.innerWidth < 768;
  return (
    <>
      <Model scale={[1, 1, 1]} /> {/* Scale for mobile */}
    </>
  );
};
function App() {
  const cameraControlsRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="absolute top-0 right-0 z-40 p-4">
        {/* Menu Icon */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen? '❌':'☰'}
        </button>

        {/* Nav Buttons */}
        <div
          className={`flex flex-col md:flex-row gap-2 mt-2 md:mt-0 ${isMenuOpen ? "block" : "hidden"
            } md:flex`}
        >
          <button
            className="border-4 border-double p-3 m-1 hover:bg-amber-50 hover:text-black"
            onClick={() => cameraControlsRef.current?.goToTeckStack()}
          >
            Teckstack
          </button>
          <button
            className="border-4 border-double p-3 m-1 hover:bg-amber-50 hover:text-black"
            onClick={() => cameraControlsRef.current?.goToAbout()}
          >
            About
          </button>
          <button
            className="border-4 border-double p-3 m-1 hover:bg-amber-50 hover:text-black"
            onClick={() => cameraControlsRef.current?.goToContact()}
          >
            Contact
          </button>
        </div>
      </nav>

      <Canvas >
        <ambientLight />
        <OrbitControls enableDamping={false} enableRotate={false} />
        <Scene />
        <CameraControls ref={cameraControlsRef} />
      </Canvas>

    </>
  )
}

export default App
