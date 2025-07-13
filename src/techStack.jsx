import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stack from "./stack";
import Crtificate from "./Certificate";

export default function TeckStack() {
    const [activePage, setactivePage] = useState("tech");

    const contentVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    function Content() {
        switch (activePage) {
            case 'tech':
                return <Stack />;
            case 'Certificate':
                return <Crtificate />;
            default:
                return <Stack />; // 🔧 Added missing return
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Top Bar */}
            <motion.div
                className="shadow-2xl border border-transparent shadow-black bg-blue-950 text-[10px] gap-1 flex items-end"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {['✖', '[]', '-'].map((symbol, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-500 w-5 p-1 hover:bg-amber-50 hover:text-red-600 m-0.5 rounded-[10px]"
                    >
                        {symbol}
                    </motion.button>
                ))}
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
                className="flex gap-2 my-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <motion.button
                    onClick={() => setactivePage('tech')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="m-1 p-1 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm rounded-[10px] hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300"
                >
                    TechStack
                </motion.button>
                <motion.button
                    onClick={() => setactivePage('Certificate')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="m-1 p-1 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm rounded-[10px] hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300"
                >
                    Certificate
                </motion.button>
            </motion.div>

            {/* Animated Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activePage}
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {Content()}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
