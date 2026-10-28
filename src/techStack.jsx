import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stack from "./stack";
import Crtificate from "./Certificate";

export default function TeckStack() {
    const [activePage, setactivePage] = useState("tech");
    const [isOpen, setIsOpen] = useState(true);

    const contentVariants = {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -15, transition: { duration: 0.2 } }
    };

    const windowVariants = {
        hidden: {
            opacity: 0,
            scale: 0.25,
            x: "-50%",
            y: "-50%"
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: "-50%",
            y: "-50%",
            transition: { type: "spring", stiffness: 350, damping: 25 }
        },
        exit: {
            opacity: 0,
            scale: 0.2,
            x: "-50%",
            y: "-50%",
            transition: { duration: 0.2 }
        }
    };

    return (
        <div className="relative w-full h-full overflow-hidden select-none">
            {/* Desktop Icons in Corner (Shown when window is closed) */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        key="desktop-icons"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-2 left-2 flex flex-col gap-2.5 z-10"
                    >
                        {/* TechStack folder */}
                        <motion.button
                            onClick={() => {
                                setactivePage("tech");
                                setIsOpen(true);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center gap-1 cursor-pointer group focus:outline-none"
                            title="Open TechStack"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-black/70 group-hover:from-amber-300 group-hover:to-amber-500 transition-all border border-amber-200/50">
                                <span className="text-xl drop-shadow">📁</span>
                            </div>
                            <span className="text-[8px] text-white font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] bg-black/60 px-1.5 py-0.5 rounded tracking-wide">
                                TechStack
                            </span>
                        </motion.button>

                        {/* Certificate folder */}
                        <motion.button
                            onClick={() => {
                                setactivePage("Certificate");
                                setIsOpen(true);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center gap-1 cursor-pointer group focus:outline-none"
                            title="Open Certificates"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg shadow-black/70 group-hover:from-blue-400 group-hover:to-indigo-600 transition-all border border-blue-300/50">
                                <span className="text-xl drop-shadow">🏆</span>
                            </div>
                            <span className="text-[8px] text-white font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] bg-black/60 px-1.5 py-0.5 rounded tracking-wide">
                                Certificates
                            </span>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Folder Window (Opens in the Center of the Monitor) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="window"
                        variants={windowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ left: "50%", top: "50%" }}
                        className="absolute w-[320px] h-[204px] flex flex-col rounded-lg shadow-2xl overflow-hidden border border-slate-700/90 bg-slate-900/95 backdrop-blur-md z-20"
                    >
                        {/* Window Title Bar */}
                        <div className="h-7 px-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between shrink-0 select-none">
                            {/* Current Folder Title */}
                            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-200">
                                <span>{activePage === "tech" ? "📁 TechStack" : "🏆 Certificates"}</span>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                title="Close Window"
                                className="w-5 h-5 rounded hover:bg-red-600 hover:text-white text-slate-400 flex items-center justify-center text-xs transition-colors cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Scrollable Window Body (Scrollbar ONLY exists here when folder is open) */}
                        <div
                            className="flex-1 overflow-y-auto px-2.5 py-2 monitor-scrollbar"
                            onWheel={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePage}
                                    variants={contentVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    {activePage === "tech" ? <Stack /> : <Crtificate />}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
