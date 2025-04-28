import './index.css'; // Tailwind CSS

export default function Example() {
    return (
        <div className="relative  bg-gray-250 min-h-screen p-6 text-black">
            <main className="space-y-8">
                <section>
                    <h2 className="text-[15px] font-semibold mb-4 underline">🚀 These Are My Projects.</h2>
                    <a
                        href="https://first-learning-project.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block max-w-sm p-3"
                    >
                        <div className="w-55 h-55 shadow-2xl bg-gray-50 border border-transparent text-black text-sm  rounded-2xl hover:bg-black hover:text-amber-50 transition-colors duration-300">
                            <div className="p-3">
                                <h3 className="font-bold text-[10px] mb-2">Vehicle Shop</h3>
                                <img
                                    src="/myFirstproject.JPG"
                                    alt="Vehicle shop preview"
                                    className="rounded-lg mb-4"
                                />
                                <div className="flex flex-col gap-2 text-[10px]">
                                    <div className="flex gap-2">
                                        <span className="font-semibold">Tech stack:</span>
                                        <span>Blender / Three Fiber / React / Tailwind CSS</span>
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