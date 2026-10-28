import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const projects = [
    {
        id: 'whatsapp',
        title: 'WhatsApp Web Clone',
        category: 'Full Stack',
        image: '/whatsappclone.JPG',
        description: 'Real-time WhatsApp chat application featuring authentication, live Socket.IO messaging, emoji picker, and image attachments.',
        techStack: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'JWT'],
        live: 'https://frontend-gjiv.vercel.app/',
        github: 'https://github.com/keshmaSalgado/whatsapp-clone',
    },
    {
        id: 'task-analytics',
        title: 'Task Management & Analytics',
        category: 'Full Stack',
        image: '/taskanalytics.jpg',
        description: 'Full-stack task management platform with a Go microservice for real-time productivity analytics, team metrics, and workflow tracking.',
        techStack: ['React', 'Go (Golang)', 'Node.js', 'Express', 'SQLite', 'Socket.IO', 'JWT'],
        github: 'https://github.com/keshmaSalgado/task-management-analytics',
    },
    {
        id: 'vehicle-shop',
        title: '3D Vehicle Showroom',
        category: '3D & WebGL',
        image: '/myFirstproject.JPG',
        description: 'Interactive 3D vehicle customization and showroom website featuring real-time lighting, materials, and camera controls.',
        techStack: ['Three.js', 'React Three Fiber', 'React', 'Tailwind CSS', 'Blender'],
        live: 'https://first-learning-project.vercel.app/',
        github: 'https://github.com/keshmaSalgado/3D-Vehicle-Website',
    },
    {
        id: 'solar-system',
        title: 'Interactive 3D Solar System',
        category: '3D & WebGL',
        image: '/solor_system.JPG',
        description: 'Realistic 3D astronomical simulation with planetary orbits, detailed planet textures, and orbital mechanics built using Three.js.',
        techStack: ['Three.js', 'JavaScript', 'HTML5', 'CSS3'],
        live: 'https://solar-system-roan-chi.vercel.app/',
        github: 'https://github.com/keshmaSalgado/solar_system',
    },
    {
        id: 'dragon-model',
        title: '3D Fantasy Dragon Creature',
        category: '3D & WebGL',
        image: '/dragon2.png',
        secondaryImage: '/dragon3.png',
        description: 'High-poly sculpt and game-ready 3D fantasy dragon model created in Blender with clean quad topology and detailed PBR textures.',
        techStack: ['Blender', '3D Sculpting', 'PBR Textures', 'Topology'],
        sketchfab: 'https://sketchfab.com/3d-models/dragon-8e934ff80ef64480847a0d603a36f7d0',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function HeroPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Full Stack', '3D & WebGL'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    return (
        <div className="w-[334px] h-[216px] flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans select-none">
            {/* Top Navigation / Header Bar */}
            <header className="h-8 px-2.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5">
                    <span className="text-xs">💼</span>
                    <span className="text-[10px] font-bold tracking-wide text-white">
                        My Projects
                    </span>
                    <span className="bg-blue-600/80 text-white text-[8px] font-bold px-1.5 py-0.2 rounded-full">
                        {projects.length}
                    </span>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 rounded border border-slate-800">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-1.5 py-0.5 rounded text-[8px] font-medium transition-all cursor-pointer ${
                                selectedCategory === cat
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'text-slate-400 hover:text-slate-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            {/* Scrollable Project Cards Container */}
            <main
                className="flex-1 overflow-y-auto p-2 space-y-2.5 monitor-scrollbar"
                onWheel={(e) => e.stopPropagation()}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-2.5"
                    >
                        {filteredProjects.map((project) => (
                            <motion.article
                                key={project.id}
                                variants={cardVariants}
                                whileHover={{ y: -2 }}
                                className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 rounded-lg overflow-hidden shadow-md transition-all duration-200 group"
                            >
                                {/* Thumbnail Image with Category Badge */}
                                <div className="relative w-full h-24 bg-slate-950 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {project.secondaryImage && (
                                        <div className="absolute bottom-1.5 right-1.5 w-9 h-9 rounded border border-slate-700/80 overflow-hidden shadow-lg bg-black">
                                            <img
                                                src={project.secondaryImage}
                                                alt="Alternate preview"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <span
                                        className={`absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[7px] font-bold tracking-wide uppercase backdrop-blur-md shadow-sm border ${
                                            project.category === 'Full Stack'
                                                ? 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                                                : 'bg-purple-950/80 text-purple-300 border-purple-500/40'
                                        }`}
                                    >
                                        {project.category}
                                    </span>
                                </div>

                                {/* Project Details */}
                                <div className="p-2 space-y-1.5">
                                    <h3 className="font-bold text-[10px] text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-[8px] text-slate-300 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-1 pt-0.5">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-1.5 py-0.2 rounded text-[7px] font-medium bg-slate-800 text-blue-300 border border-slate-700/60"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-1.5 pt-1 border-t border-slate-800/80">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-0.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-[8px] font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-sm hover:scale-102"
                                            >
                                                <span>🌐</span> Live Demo ↗
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 text-[8px] font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-sm hover:scale-102"
                                            >
                                                <span>💻</span> GitHub ↗
                                            </a>
                                        )}
                                        {project.sketchfab && (
                                            <a
                                                href={project.sketchfab}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-0.5 rounded bg-amber-600 hover:bg-amber-500 text-white text-[8px] font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-sm hover:scale-102"
                                            >
                                                <span>🐉</span> Sketchfab ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
