import { NavBar } from "../../components/NavBar/NavBar"
import { motion } from "framer-motion";

export const NotFound = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: "-100vh",
        },
        visible: {
            opacity: 0.75,
            y: 0,
            transition: {
                type: "spring",
                delay: 0.5,
                stiffness: 100,
            },
        },
        exit: {
            x: "-100vw",
            transition: { ease: "easeInOut" },
        },
    };

    return (
        <>
            <NavBar />
            <motion.div
                className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-red-400"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.h1
                    className="text-6xl font-bold mb-2 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    404
                </motion.h1>
                <motion.h2
                    className="text-2xl font-medium text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    Not Found
                </motion.h2>
            </motion.div>
        </>
    );
};
