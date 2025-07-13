import './index.css';
import { motion } from 'framer-motion'; // ✅ Correctly importing motion

// Animation Variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Example() {
    return (
        <div className="relative bg-gray-250 min-h-screen p-6 text-black">
            <main className="space-y-8">
                <section>
                    <motion.h2 
                        className="text-[15px] font-semibold mb-4 text-blue-900"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        🚀 These Are My Projects.
                    </motion.h2>

                    {/* Animated container for staggered entrance */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                    >

                        {/* Car Shop Card */}
                        <motion.a
                            variants={cardVariants}
                            href="https://first-learning-project.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block max-w-sm p-3"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-55 h-55 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm rounded-[10px] hover:bg-black hover:text-amber-50 transition-colors duration-300">
                                <div className="p-3">
                                    <h3 className="font-bold text-[10px] mb-2">Vehicle Shop</h3>
                                    <img
                                        src="/myFirstproject.JPG"
                                        alt="Vehicle shop preview"
                                        className="rounded-lg mb-4"
                                    />
                                    <div className="flex flex-col gap-1 text-[10px]">
                                        <div className="flex gap-1 flex-wrap">
                                            <span className="font-semibold">Tech stack:</span>
                                            {['Blender', 'Three Fiber', 'React', 'Tailwind CSS'].map((tech, index) => (
                                                <span key={index} className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-semibold">About:</span>
                                            <span>This is a 3D website about a car shop.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.a>

                        {/* Solar System Card */}
                        <motion.a
                            variants={cardVariants}
                            href="https://solar-system-roan-chi.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block max-w-sm p-3"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-55 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm rounded-[10px] hover:bg-black hover:text-amber-50 transition-colors duration-300">
                                <div className="p-3">
                                    <h3 className="font-bold text-[10px] mb-2">Solar System</h3>
                                    <img
                                        src="/solor_system.JPG"
                                        alt="Solar system preview"
                                        className="rounded-lg mb-4 h-[50px]"
                                    />
                                    <div className="flex flex-col gap-1 text-[10px]">
                                        <div className="flex gap-1 flex-wrap">
                                            <span className="font-semibold">Tech stack:</span>
                                            {['JavaScript', 'HTML', 'CSS', 'Three.js'].map((tech, index) => (
                                                <span key={index} className="bg-blue-900 shadow-black text-amber-50 rounded-[3px] p-1 text-[8px] shadow-2xl border border-transparent">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-semibold">About:</span>
                                            <span>This is an interactive 3D Solar System built with Three.js.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.a>

                    </motion.div>
                </section>
            </main>
        </div>
    );
}
