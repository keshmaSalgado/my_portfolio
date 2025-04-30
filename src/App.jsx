import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, {
  useEffect, useRef, useState, forwardRef,
  useImperativeHandle,
  Suspense,
} from "react";
import { AmbientLight, Vector3 } from 'three'
import { Html, OrbitControls, PerspectiveCamera, Text, } from '@react-three/drei'
import './index.css'
import { Model } from './model'
import { Break } from 'three/tsl';
import { X } from 'lucide-react';

const CameraControls = forwardRef(({ isMobile }, ref) => {
  const { camera } = useThree();
  const scrollCooldown = useRef(false);
  // const touchStartY = useRef(null);
  // const speed = 0.1;
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0)
  // const handleMouseClick = () => {
  //   console.log(camera.rotation);
  //   // // console.log()
  // };
  {/*This is not working*/ }
  // const handleTouchStart = (e) => {
  //   touchStartY.current = e.touches[0].clientY;
  // };

  // const handleTouchMove = (e) => {
  //   if (touchStartY.current === null) return;

  //   const touchEndY = e.touches[0].clientY;
  //   const deltaY = touchStartY.current - touchEndY;

  //   if (deltaY > 30 && currentTargetIndex < targetPositions.length - 1) {
  //     setCurrentTargetIndex((prev) => prev + 1);
  //     touchStartY.current = null; // prevent multiple fires
  //   } else if (deltaY < -30 && currentTargetIndex > 0) {
  //     setCurrentTargetIndex((prev) => prev - 1);
  //     touchStartY.current = null;
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleMouseClick);
  //   return () => {
  //     window.removeEventListener("click", handleMouseClick);    
  //   };
  // }, [currentTargetIndex]); // No need for [camera] dependency


  const targetPositions = [
    isMobile ? new Vector3(10, 6.64, 1.92) : new Vector3(6.09, 6.64, 3.52), // startup
    isMobile ? new Vector3(-1, 3, -0.4) : new Vector3(-0.93, 3.36, -0.48), // teckStack
    isMobile ? new Vector3(-0.55, 2.97, -1.35) : new Vector3(-0.55, 2.97, -1.80), // About
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
  // Expose navigation functions to parent
  useImperativeHandle(ref, () => ({
    goToTeckStack: () => setCurrentTargetIndex(1),
    goToAbout: () => setCurrentTargetIndex(2),
    goToContact: () => setCurrentTargetIndex(3),
    goToStartup: () => setCurrentTargetIndex(0),
    goNext: () => {
      if (currentTargetIndex < targetPositions.length - 1) {
        setCurrentTargetIndex((prev) => prev + 1);
      }
    },
    goPrev: () => {
      if (currentTargetIndex > 0) {
        setCurrentTargetIndex((prev) => prev - 1);
      }
    }
  }))

  const handleScroll = (event) => {

    if (scrollCooldown.current) return; // Ignore if cooling down

    if (event.deltaY > 0 && currentTargetIndex < targetPositions.length - 1) {
      setCurrentTargetIndex((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentTargetIndex > 0) {
      setCurrentTargetIndex((prev) => prev - 1);
    }
    scrollCooldown.current = true;
    setTimeout(() => {
      scrollCooldown.current = false;
    }, 800);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    // window.addEventListener("touchstart", handleTouchStart); // mobile
    // window.addEventListener("touchmove", handleTouchMove);   // mobile

    return () => {
      // window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleScroll);
      // window.removeEventListener("touchstart", handleTouchStart);
      // window.removeEventListener("touchmove", handleTouchMove);
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
      <Suspense fallback={
        <Html center>
          <p className="text-white text-xl italic animate-pulse">Loading model...</p>
        </Html>
      }>
        <Model scale={[1, 1, 1]} /> {/* Scale for mobile */}
      </Suspense>
    </>
  );
};

function App() {
  const cameraControlsRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Mobile detection state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/**Menu */}
      {!isMobile &&
        <div className='absolute top-2/6 p-8 '>
          <div className=' sm:text-2xl md:text-4xl font-bold text-center'>
            Dive into 3D <br />Web Development <br />Journey with me
          </div>
          <div className='text-[20px] p-4 text-left border border-double'>
            I'm a 3D Web Developer <br />
            passionate <br />
            about creating immersive,  <br />
            interactive experiences <br />
            using React Three Fiber, <br />
            Three.js, and WebGL. <br />
            I turn ideas into dynamic,  <br />
            high-performing web experiences.
          </div>
        </div>

      }
      <div className='flex z-40 '>
        <div className='left-0 absolute z-40 p-3 flex'>
          <img className="w-20 h-20 font-bold text-amber-50" src="./myLogo.svg" alt="" />
          {!isMobile && <h1 className='p-10 font-bold text-2xl'>KESHMA EESARA SALGADO</h1>}

        </div>
        {/* Navigation Menu */}

        <nav className="absolute top-0 right-0 z-40 p-4">

          {/* Menu Icon */}
          <button
            className="text-white text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="text-white w-6 h-6" /> : '☰'}
          </button>

          {/* Nav Buttons */}
          <div
            className={`flex flex-col transition-all duration-300 ease-in-out z-30 md:flex-row gap-2 mt-2 md:mt-0 ${isMenuOpen ? "block" : "hidden"
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
              MyProjects
            </button>
            <button
              className="border-4 border-double p-3 m-1 hover:bg-amber-50 hover:text-black"
              onClick={() => cameraControlsRef.current?.goToContact()}
            >
              Contact
            </button>

          </div>
        </nav>
      </div>
      <div className="w-full h-full fixed">
        <Canvas >
          <ambientLight />
          <OrbitControls enableRotate={false} enableDamping={false} enableZoom={false} />
          <Scene />
          <CameraControls ref={cameraControlsRef} isMobile={isMobile} />
        </Canvas>
      </div>

      {/* ↑ Up Button (optional) */}
      {!!isMobile &&
        <button
          className="left-1/2 fixed bottom-24 p-4 bg-white text-black rounded-full z-50 hover:bg-amber-300 transition-all duration-300"
          onClick={() => cameraControlsRef.current?.goPrev()}
        >
          ↑
        </button>}
      {/* ↓ Down Button */}
      {!!isMobile &&
        <button
          className="left-1/2  fixed bottom-10 p-4 bg-white text-black rounded-full z-50 hover:bg-amber-300 transition-all duration-300"
          onClick={() => cameraControlsRef.current?.goNext()}
        >
          ↓
        </button>}
    </>


  )
}

export default App
