import { NavBar } from "../../components/NavBar/NavBar"
import { motion } from "framer-motion";
import { TeamList } from "../../components/TeamList/TeamList";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

export const About = () => {
    return (
        <>
            <NavBar />

            <div className="min-h-screen bg-gradient-to-br from-comic-dark via-gray-900 to-comic-dark">
                <TeamList />

                <motion.div
                    className="flex flex-col items-center justify-center py-20 text-white"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    <motion.div
                        className="flex flex-col items-center justify-center mb-12"
                        variants={itemVariants}
                    >
                        <motion.h3
                            className="text-4xl font-bold mb-8 bg-gradient-to-r from-comic-primary via-comic-accent to-comic-secondary bg-clip-text text-transparent"
                            variants={itemVariants}
                        >
                            Our Values
                        </motion.h3>
                        <motion.ul
                            className="text-lg font-light text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4"
                            variants={itemVariants}
                        >
                            <motion.li
                                className="group relative bg-gradient-to-br from-comic-cosmic-500 to-comic-cosmic-600 text-white rounded-2xl p-8 hover:from-comic-cosmic-600 hover:to-comic-cosmic-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-comic-cosmic-500/30"
                                variants={itemVariants}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-xl">Passion for comics</span>
                                </div>
                            </motion.li>
                            <motion.li
                                className="group relative bg-gradient-to-br from-comic-secondary to-blue-600 text-white rounded-2xl p-8 hover:from-blue-600 hover:to-comic-secondary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-comic-secondary/30"
                                variants={itemVariants}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-xl">Commitment to quality</span>
                                </div>
                            </motion.li>
                            <motion.li
                                className="group relative bg-gradient-to-br from-comic-electric-500 to-comic-electric-600 text-white rounded-2xl p-8 hover:from-comic-electric-600 hover:to-comic-electric-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-comic-electric-500/30"
                                variants={itemVariants}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-xl">Respect for diversity</span>
                                </div>
                            </motion.li>
                            <motion.li
                                className="group relative bg-gradient-to-br from-comic-warning to-yellow-600 text-white rounded-2xl p-8 hover:from-yellow-600 hover:to-comic-warning transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-comic-warning/30"
                                variants={itemVariants}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-xl">Continuous learning and improvement</span>
                                </div>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};
