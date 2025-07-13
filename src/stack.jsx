import { motion } from 'framer-motion';

export default function Stack() {
    const techstack = [
        { name: 'Blender', img: './images/blender.svg' },
        { name: 'ReactJs', img: './images/react.svg' },
        { name: 'JavaScript', img: './images/javascript.svg' },
        { name: 'HTML5', img: './images/html.svg' },
        { name: 'CSS', img: './images/css.svg' },
        { name: 'TailwindCss', img: './images/tailwindcss.svg' },
        { name: 'ThreeJs', img: './images/threejs.svg' },
        { name: 'Flutter', img: './images/flutter.svg' },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {techstack.map((item, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm rounded-[10px] hover:bg-black hover:text-amber-50 transition-colors duration-300 flex flex-col justify-center items-center text-center"
                >
                    <h3 className="font-bold text-[10px]">{item.name}</h3>
                    <img src={item.img} alt={item.name} className="w-8 h-8 mt-1" />
                </motion.div>
            ))}
        </motion.div>
    );
}
