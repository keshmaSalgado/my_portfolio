import { motion } from 'framer-motion';

const certificates = [
    {
        name: 'AWS Cloud Technical Essentials',
        platform: 'Coursera',
        provider: 'Amazon Web Services',
        link: 'https://coursera.org/share/32a2cc24b43c907ef71d48559d7eed27',
        image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~U43X5YKNRC7N/CERTIFICATE_LANDING_PAGE~U43X5YKNRC7N.jpeg',
    },
    {
        name: 'Generative AI: Introduction and Applications',
        platform: 'Coursera',
        provider: 'IBM',
        link: 'https://coursera.org/share/3150b1e90b4dcd4cf9827ddfb32ea837',
        image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UWFC6R239T8Y/CERTIFICATE_LANDING_PAGE~UWFC6R239T8Y.jpeg',
    },
    {
        name: 'Flutter & Dart - The Complete Guide',
        platform: 'Udemy',
        provider: 'Academind',
        link: 'https://www.udemy.com/certificate/UC-b5820980-8b61-4f60-b840-3e2b4713106a/',
        image: '/cert/UC-b5820980-8b61-4f60-b840-3e2b4713106a.jpg',
    },
    {
        name: 'Introduction to DevOps',
        platform: 'Coursera',
        provider: 'IBM',
        link: 'https://coursera.org/share/f51abc0a91c86fe321c0bc870591d7de',
        image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LPZ5EQI18CQG/CERTIFICATE_LANDING_PAGE~LPZ5EQI18CQG.jpeg',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Crtificate() {
    return (
        <motion.div
            className="pt-1 pb-4 space-y-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1.5 border-b border-blue-900/60 pb-0.5">
                🏆 Certifications
            </h3>
            {certificates.map((cert, index) => (
                <motion.a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    className="block"
                >
                    <div className="shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm rounded-[10px] hover:bg-black hover:text-amber-50 transition-colors duration-300 overflow-hidden">
                        <img
                            src={cert.image}
                            alt={cert.name}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-2">
                            <h4 className="font-bold text-[10px]">{cert.name}</h4>
                            <div className="flex gap-2 mt-1">
                                <span className="bg-blue-900 text-amber-50 rounded-[3px] px-1 py-0.5 text-[8px] shadow-sm">
                                    {cert.platform}
                                </span>
                                <span className="bg-blue-900 text-amber-50 rounded-[3px] px-1 py-0.5 text-[8px] shadow-sm">
                                    {cert.provider}
                                </span>
                            </div>
                            <span className="inline-block mt-1 text-[8px] text-blue-600 hover:text-blue-400 underline">
                                View Certificate →
                            </span>
                        </div>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
}