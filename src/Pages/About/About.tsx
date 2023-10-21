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

            <TeamList />

            <motion.div
                className="flex flex-col items-center justify-center h-screen text-white"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <motion.div
                    className="flex flex-col items-center justify-center mb-8"
                    variants={itemVariants}
                >
                    <motion.h3
                        className="text-2xl font-medium mb-2"
                        variants={itemVariants}
                    >
                        Our Values
                    </motion.h3>
                    <motion.ul
                        className="text-lg font-light text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                        variants={itemVariants}
                    >
                        <motion.li
                            className="bg-purple-500 text-white rounded-lg p-4 hover:bg-purple-600 transition-colors duration-300"
                            variants={itemVariants}
                        >
                            Passion for comics
                        </motion.li>
                        <motion.li
                            className="bg-blue-500 text-white rounded-lg p-4 hover:bg-blue-600 transition-colors duration-300"
                            variants={itemVariants}
                        >
                            Commitment to quality
                        </motion.li>
                        <motion.li
                            className="bg-green-500 text-white rounded-lg p-4 hover:bg-green-600 transition-colors duration-300"
                            variants={itemVariants}
                        >
                            Respect for diversity
                        </motion.li>
                        <motion.li
                            className="bg-yellow-500 text-white rounded-lg p-4 hover:bg-yellow-600 transition-colors duration-300"
                            variants={itemVariants}
                        >
                            Continuous learning and improvement
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </>
    );
};
