import { NavBar } from "../../components/NavBar/NavBar"
import comicBackground from '../../assets/comic-background.jpg';
import { useState } from 'react';

export const Home = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return(
        <>
            <NavBar />
            <div className="bg-gray-100 py-20 relative" style={{ backgroundImage: `url(${comicBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className={`text-3xl font-extrabold tracking-tight text-white sm:text-4xl ${isHovering ? 'text-red-500' : 'text-white'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            Welcome to ComicVerse
                        </h2>
                        <p className={`mt-3 max-w-2xl mx-auto text-xl text-white sm:mt-4 ${isHovering ? 'text-red-500' : 'text-white'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            The best place to find your favorite comics and graphic novels.
                        </p>
                    </div>
                </div>
                <div className={`absolute inset-0 bg-black opacity-25 ${isHovering ? 'animate-pulse' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
                <div className={`absolute inset-0 border-2 border-red-500 ${isHovering ? 'shadow-lg' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
            </div>
        </>
    )
}