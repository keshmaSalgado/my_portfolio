/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import './index.css'; // or wherever your Tailwind setup is located

export default function Example() {
    return (
        <div className="relative bg-indigo-200">
            <main>
                <div className="topic1">
                    <h1>💡 About</h1>
                </div>
                <div className='paragraph1'>
                    <p>
                        I'm a passionate 3D web developer with a strong focus on creating immersive, interactive experiences using modern web technologies like React Three Fiber, Three.js, and WebGL. I love blending creativity with code—turning static websites into dynamic, spatial experiences that feel alive. Whether it's building product visualizers, interactive portfolios, or fully animated scenes, I bring ideas to life in the browser with smooth performance and clean design. Always exploring the edge of web and graphics, I aim to push the boundaries of what's possible on the web.
                    </p>
                </div>
                <div className="topic2">
                    THESE ARE MY PROJECTS
                </div>
                <a href="https://first-learning-project.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className='w-80 h-60 text-black text-[13px] border-4 rounded-2xl border-double hover:bg-black hover:text-amber-50'>
                        <div className='p-2'>
                            <h1 className='font-bold'>Vehical Shop</h1>
                            <img src="/myFirstproject.JPG" alt="" />
                            <div className='flex mt-2'>
                                <h1>Teckcstack:</h1>
                                <p>Blender/</p>
                                <p>ThreeFiber/</p>
                                <p>React/</p>
                                <p>Tailwind Css</p>
                            </div>
                            <div className='flex mt-2'>
                                <h1>about:</h1>
                                <p>This is a 3D website about car shop</p>
                            </div>
                        </div>
                    </div>
                </a>
            </main>
        </div>
    )
}
