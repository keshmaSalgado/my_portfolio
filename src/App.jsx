import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, {
  useEffect, useRef, useState, forwardRef,
  useImperativeHandle, Suspense
} from "react";
import { Vector3 } from 'three';
import { Html, OrbitControls } from '@react-three/drei';
import './index.css';
import { Model } from './model';
import { X } from 'lucide-react';

const CameraControls = forwardRef(({ isMobile }, ref) => {
  const { camera } = useThree();
  const scrollCooldown = useRef(false);
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);

  const targetPositions = [
    isMobile ? new Vector3(10, 6.64, 1.92) : new Vector3(6.09, 6.64, 3.52), // Startup
    isMobile ? new Vector3(-1, 3, -0.4) : new Vector3(-0.93, 3.36, -0.48),  // Tech Stack
    isMobile ? new Vector3(-0.55, 2.97, -1.35) : new Vector3(-0.55, 2.97, -1.80), // About
    new Vector3(-1.95, 2.79, -0.03) // Contact
  ];

  const targetRotations = [
    [-0.8557, 1.2004, 0.8208],
    [-0.3056, 0.9293, 0.2476],
    [-0.3357, 0.0348, 0.0121],
    [-1.5526, 0.0621, 1.2864]
  ];

  // Expose control methods
  useImperativeHandle(ref, () => ({
    goToStartup: () => setCurrentTargetIndex(0),
    goToTeckStack: () => setCurrentTargetIndex(1),
    goToAbout: () => setCurrentTargetIndex(2),
    goToContact: () => setCurrentTargetIndex(3),
    goNext: () => {
      if (currentTargetIndex < targetPositions.length - 1) {
        setCurrentTargetIndex(prev => prev + 1);
      }
    },
    goPrev: () => {
      if (currentTargetIndex > 0) {
        setCurrentTargetIndex(prev => prev - 1);
      }
    }
  }));

  // Scroll handling
  const handleScroll = (event) => {
    if (scrollCooldown.current) return;

    if (event.deltaY > 0 && currentTargetIndex < targetPositions.length - 1) {
      setCurrentTargetIndex(prev => prev + 1);
    } else if (event.deltaY < 0 && currentTargetIndex > 0) {
      setCurrentTargetIndex(prev => prev - 1);
    }

    scrollCooldown.current = true;
    setTimeout(() => {
      scrollCooldown.current = false;
    }, 800);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentTargetIndex]);

  // Animate camera
  useFrame(() => {
    camera.position.lerp(targetPositions[currentTargetIndex], 0.05);
    const [x, y, z] = targetRotations[currentTargetIndex];
    camera.rotation.set(x, y, z);
  });

  return null;
});

const Scene = () => (
  <Suspense fallback={
    <Html center>
      <p className="text-white text-xl italic animate-pulse">Loading model...</p>
    </Html>
  }>
    <Model scale={[1, 1, 1]} />
  </Suspense>
);

function App() {
  const cameraControlsRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Left Intro Text */}
      {!isMobile &&
        <div className='absolute top-2/6 p-8'>
          <div className='sm:text-2xl md:text-4xl font-bold text-center'>
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

      {/* Logo & Nav */}
      <div className='flex z-40'>
        <div className='left-0 absolute z-40 p-3 flex'>
          <img className="w-20 h-20" src="./myLogo.svg" alt="Logo" />
          {!isMobile &&
            <h1 className='p-10 font-bold text-2xl'>
              KESHMA EESARA SALGADO
            </h1>
          }
        </div>

        {/* Mobile Nav */}
        <nav className="absolute top-0 right-0 z-40 p-4">
          <button
            className="text-white text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="text-white w-6 h-6" /> : '☰'}
          </button>

          <div
            className={`flex flex-col transition-all duration-300 ease-in-out md:flex-row gap-2 mt-2 md:mt-0 ${isMenuOpen ? "block" : "hidden"} md:flex`}
          >
            <button className="nav-btn" onClick={() => cameraControlsRef.current?.goToTeckStack()}>Techstack</button>
            <button className="nav-btn" onClick={() => cameraControlsRef.current?.goToAbout()}>MyProjects</button>
            <button className="nav-btn" onClick={() => cameraControlsRef.current?.goToContact()}>Contact</button>
          </div>
        </nav>
      </div>

      {/* Canvas Scene */}
      <div className="w-full h-full fixed">
        <Canvas>
          <ambientLight />
          <OrbitControls enableRotate={false} enableDamping={false} enableZoom={false} />
          <Scene />
          <CameraControls ref={cameraControlsRef} isMobile={isMobile} />
        </Canvas>
      </div>

      {/* Mobile Arrows */}
      {isMobile && (
        <>
          <button
            className="left-1/2 fixed bottom-24 p-4 bg-white text-black rounded-full z-50 hover:bg-amber-300 transition-all duration-300"
            onClick={() => cameraControlsRef.current?.goPrev()}
          >
            ↑
          </button>
          <button
            className="left-1/2 fixed bottom-10 p-4 bg-white text-black rounded-full z-50 hover:bg-amber-300 transition-all duration-300"
            onClick={() => cameraControlsRef.current?.goNext()}
          >
            ↓
          </button>
        </>
      )}
    </>
  );
}

export default App;
