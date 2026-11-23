import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/* ───── data (same as your existing components) ───── */
const techCategories = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Dart'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Three.js', 'R3F'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'FastAPI'] },
  { category: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'] },
  { category: 'Cloud', items: ['AWS', 'Vercel', 'Render'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Figma', 'Blender', 'Linux'] },
];

const projects = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Web Clone',
    category: 'Full Stack',
    image: '/whatsappclone.JPG',
    description: 'Real-time chat app with Socket.IO, auth, emoji picker & image attachments.',
    techStack: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
    live: 'https://frontend-gjiv.vercel.app/',
    github: 'https://github.com/keshmaSalgado/whatsapp-clone',
  },
  {
    id: 'task-analytics',
    title: 'Task Management & Analytics',
    category: 'Full Stack',
    image: '/taskanalytics.jpg',
    description: 'Task platform with Go micro-service for real-time productivity analytics.',
    techStack: ['React', 'Go', 'Node.js', 'SQLite'],
    github: 'https://github.com/keshmaSalgado/task-management-analytics',
  },
  {
    id: 'vehicle-shop',
    title: '3D Vehicle Showroom',
    category: '3D & WebGL',
    image: '/myFirstproject.JPG',
    description: 'Interactive 3D vehicle customization with real-time lighting & materials.',
    techStack: ['Three.js', 'R3F', 'Tailwind'],
    live: 'https://first-learning-project.vercel.app/',
    github: 'https://github.com/keshmaSalgado/3D-Vehicle-Website',
  },
  {
    id: 'solar-system',
    title: '3D Solar System',
    category: '3D & WebGL',
    image: '/solor_system.JPG',
    description: 'Realistic astronomical simulation with planetary orbits & textures.',
    techStack: ['Three.js', 'JavaScript'],
    live: 'https://solar-system-roan-chi.vercel.app/',
    github: 'https://github.com/keshmaSalgado/solar_system',
  },
  {
    id: 'dragon-model',
    title: '3D Dragon Creature',
    category: '3D & WebGL',
    image: '/dragon2.png',
    description: 'High-poly sculpt and game-ready 3D dragon model with PBR textures.',
    techStack: ['Blender', 'PBR'],
    sketchfab: 'https://sketchfab.com/3d-models/dragon-8e934ff80ef64480847a0d603a36f7d0',
  },
];

const certificates = [
  {
    name: 'AWS Cloud Technical Essentials',
    provider: 'Amazon Web Services',
    platform: 'Coursera',
    link: 'https://coursera.org/share/32a2cc24b43c907ef71d48559d7eed27',
  },
  {
    name: 'Generative AI: Intro & Applications',
    provider: 'IBM',
    platform: 'Coursera',
    link: 'https://coursera.org/share/3150b1e90b4dcd4cf9827ddfb32ea837',
  },
  {
    name: 'Flutter & Dart – Complete Guide',
    provider: 'Academind',
    platform: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-b5820980-8b61-4f60-b840-3e2b4713106a/',
  },
  {
    name: 'Introduction to DevOps',
    provider: 'IBM',
    platform: 'Coursera',
    link: 'https://coursera.org/share/f51abc0a91c86fe321c0bc870591d7de',
  },
];

/* ───── small reusable pieces ───── */
const SectionTitle = ({ emoji, children }) => (
  <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
    <span>{emoji}</span> {children}
  </h2>
);

const Pill = ({ children, className = '' }) => (
  <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${className}`}>
    {children}
  </span>
);

/* ───── sections ───── */
function HeroSection() {
  return (
    <section className="mobile-section pt-14 pb-8 px-5 text-center">
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="./myLogo.svg"
        alt="Logo"
        className="w-20 h-20 mx-auto mb-4 !mt-0"
      />
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-2xl font-extrabold tracking-tight text-white"
      >
        Keshma Eesara Salgado
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xs mx-auto"
      >
        Full-Stack & 3D Web Developer passionate about creating immersive, interactive experiences using React, Three.js & WebGL.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="flex justify-center gap-3 mt-5"
      >
        <a
          href="https://github.com/keshmaSalgado"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-btn-outline"
        >
          💻 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/keshma-salgado-6541932a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-btn-outline"
        >
          🔗 LinkedIn
        </a>
      </motion.div>
    </section>
  );
}

function TechSection() {
  return (
    <section className="mobile-section px-5 py-6">
      <SectionTitle emoji="🛠">Tech Stack</SectionTitle>
      <div className="space-y-4">
        {techCategories.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mb-1.5">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <Pill key={item} className="bg-slate-800 text-slate-200 border border-slate-700">
                  {item}
                </Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', '3D & WebGL'];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="mobile-section px-5 py-6">
      <SectionTitle emoji="💼">Projects</SectionTitle>

      {/* filter tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              filter === cat
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-400 border border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          {filtered.map((project) => (
            <article
              key={project.id}
              className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-40 object-cover object-top !mt-0"
              />
              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-white">{project.title}</h3>
                  <Pill
                    className={
                      project.category === 'Full Stack'
                        ? 'bg-blue-950 text-blue-300 border border-blue-500/40'
                        : 'bg-purple-950 text-purple-300 border border-purple-500/40'
                    }
                  >
                    {project.category}
                  </Pill>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((t) => (
                    <Pill key={t} className="bg-slate-800 text-blue-300 border border-slate-700/60">
                      {t}
                    </Pill>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="mobile-link-btn bg-blue-600">
                      🌐 Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="mobile-link-btn bg-slate-700">
                      💻 GitHub
                    </a>
                  )}
                  {project.sketchfab && (
                    <a href={project.sketchfab} target="_blank" rel="noopener noreferrer" className="mobile-link-btn bg-amber-600">
                      🐉 Sketchfab
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function CertsSection() {
  return (
    <section className="mobile-section px-5 py-6">
      <SectionTitle emoji="🏆">Certifications</SectionTitle>
      <div className="space-y-3">
        {certificates.map((cert, i) => (
          <a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-900 border border-slate-800 rounded-xl p-3 active:scale-[0.98] transition-transform"
          >
            <h4 className="font-bold text-sm text-white">{cert.name}</h4>
            <div className="flex gap-2 mt-1.5">
              <Pill className="bg-blue-900 text-blue-200">{cert.platform}</Pill>
              <Pill className="bg-slate-800 text-slate-300">{cert.provider}</Pill>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const navigate = useNavigate();
  return (
    <section className="mobile-section px-5 py-6 pb-10">
      <SectionTitle emoji="📬">Contact</SectionTitle>
      <p className="text-sm text-slate-400 mb-4">
        Want to work together? Drop me a message!
      </p>
      <button
        onClick={() => navigate('/gmail')}
        className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm transition-colors"
      >
        ✉️  Send me a message
      </button>
      <div className="flex justify-center gap-4 mt-5">
        <a href="https://github.com/keshmaSalgado" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-xl transition-colors">💻</a>
        <a href="https://www.linkedin.com/in/keshma-salgado-6541932a8/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-xl transition-colors">🔗</a>
      </div>
    </section>
  );
}

/* ───── main mobile shell ───── */
export default function MobilePortfolio() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: '🏠', title: 'Home' },
    { id: 'tech', label: '🛠', title: 'Stack' },
    { id: 'projects', label: '💼', title: 'Work' },
    { id: 'certs', label: '🏆', title: 'Certs' },
    { id: 'contact', label: '📬', title: 'Contact' },
  ];

  return (
    <div className="mobile-portfolio-root">
      {/* scrollable content */}
      <div className="mobile-scroll-area">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'home' && <HeroSection />}
            {activeTab === 'tech' && <TechSection />}
            {activeTab === 'projects' && <ProjectsSection />}
            {activeTab === 'certs' && <CertsSection />}
            {activeTab === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* bottom tab bar */}
      <nav className="mobile-tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mobile-tab-item ${activeTab === tab.id ? 'mobile-tab-active' : ''}`}
          >
            <span className="text-lg">{tab.label}</span>
            <span className="text-[10px]">{tab.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
