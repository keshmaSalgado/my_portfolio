import './index.css'; // Tailwind CSS


export default function Example() {
    const techstack = ['Blender', 'Three Fiber', 'React', 'Tailwind CSS'];

    const listItems = techstack.map((item, index) => (
        <span key={index}>
            <button type="button" className="bg-blue-500 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">{item}</button>
        </span>
    ));

    return (
        <div className="relative  bg-gray-250 min-h-screen p-6 text-black">
            <main className="space-y-8">
                <section>
                    <h2 className="text-[15px] font-semibold mb-4 text-blue-600">🚀 These Are My Projects.</h2>
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
                                <div className="flex flex-col gap-2 text-[10px]">
                                    <div className="flex gap-2">
                                        <span className="font-semibold">Tech stack:</span>
                                        {listItems}
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