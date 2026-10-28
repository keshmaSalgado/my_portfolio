import { motion } from 'framer-motion';

export default function Stack() {
    const categories = [
        {
            category: 'Programming Languages',
            items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Dart']
        },
        {
            category: 'Frontend Development',
            items: ['React', 'Next.js', 'Flutter', 'HTML5', 'CSS3', 'Tailwind CSS', 'Three.js', 'React Three Fiber']
        },
        {
            category: 'Backend Development',
            items: ['Node.js', 'Express.js', 'Django', 'FastAPI']
        },
        {
            category: 'Databases',
            items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite']
        },
        {
            category: 'Cloud & Deployment',
            items: ['AWS', 'Vercel', 'Render']
        },
        {
            category: 'Development Tools',
            items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker', 'Linux', 'Blender']
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    const categoryVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    return (
        <motion.div
            className="pt-1 pb-4 space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {categories.map((cat, catIndex) => (
                <motion.div key={catIndex} variants={categoryVariants}>
                    <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1.5 border-b border-blue-900/60 pb-0.5">
                        {cat.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                        {cat.items.map((item, index) => (
                            <motion.span
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="px-2 py-0.5 shadow-sm bg-slate-800/90 border border-slate-700/80 text-slate-200 hover:bg-blue-600 hover:text-white text-[10px] rounded-[6px] transition-colors duration-200 font-medium cursor-default"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
