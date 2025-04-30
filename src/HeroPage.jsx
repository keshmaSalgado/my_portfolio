import './index.css'; // Tailwind CSS


export default function Example() {

    return (
        <div className="relative  bg-gray-250 min-h-screen p-6 text-black">
            <main className="space-y-8">
                <section>
                    <h2 className="text-[15px] font-semibold mb-4 text-blue-900">🚀 These Are My Projects.</h2>
                    <a
                        href="https://first-learning-project.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block max-w-sm p-3"
                    >
                        <div className="w-55 h-55 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm  rounded-[10px] hover:bg-black hover:text-amber-50 transition-colors duration-300">
                            <div className="p-3">
                                <h3 className="font-bold text-[10px] mb-2">Vehicle Shop</h3>
                                <img
                                    src="/myFirstproject.JPG"
                                    alt="Vehicle shop preview"
                                    className="rounded-lg mb-4"
                                />
                                <div className="flex flex-col gap-1 text-[10px]">
                                    <div className="flex gap-1">
                                        <span className="font-semibold">Tech stack:</span>
                                        <button type="button" className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">Blender</button>
                                        <button type="button" className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">Three Fiber</button>
                                        <button type="button" className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">React</button>
                                        <button type="button" className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">Tailwind CSS</button>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-semibold">About:</span>
                                        <span>This is a 3D website about a car shop.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://solar-system-roan-chi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block max-w-sm p-3"
                    >
                        <div className="w-55 h-55 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm  rounded-[10px] hover:bg-black hover:text-amber-50 transition-colors duration-300">
                            <div className="p-3">
                                <h3 className="font-bold text-[10px] mb-2">Vehicle Shop</h3>
                                <img
                                    src="/solor_system.JPG"
                                    alt="Vehicle shop preview"
                                    className="rounded-lg mb-4"
                                />
                                <div className="flex flex-col gap-1 text-[10px]">
                                    <div className="flex gap-1">
                                        <span className="font-semibold">Tech stack:</span>
                                        <button type="button" className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">JavaScript</button>
                                        <button type="button" className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">HTML</button>
                                        <button type="button" className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">CSS</button>
                                        <button type="button" className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">Three.js</button>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-semibold">About:</span>
                                        <span>This is a 3D website about a car shop.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </section>
            </main>
        </div>
    );
}