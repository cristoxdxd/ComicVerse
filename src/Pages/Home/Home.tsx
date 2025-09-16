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
            <main 
                className="relative min-h-screen bg-gradient-to-br from-comic-dark via-gray-900 to-comic-dark py-20" 
                style={{ 
                    backgroundImage: `url(${comicBackground})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
                aria-label="ComicVerse home page hero section"
            >
                {/* Enhanced overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-8">
                        <div className="space-y-6">
                            <h1 
                                className={`text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight transition-all duration-500 ${isHovering ? 'text-comic-hero-400 transform scale-105' : 'text-white'} drop-shadow-2xl`} 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave}
                            >
                                Welcome to{' '}
                                <span className="bg-gradient-to-r from-comic-primary via-comic-accent to-comic-secondary bg-clip-text text-transparent">
                                    ComicVerse
                                </span>
                            </h1>
                            <p 
                                className={`mt-8 max-w-4xl mx-auto text-xl md:text-2xl lg:text-3xl transition-all duration-500 font-medium ${isHovering ? 'text-comic-hero-300' : 'text-gray-100'} drop-shadow-lg`} 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave}
                            >
                                Discover your next favorite story in our vast collection of comics and graphic novels.
                            </p>
                        </div>
                        
                        <div className="mt-12">
                            <button 
                                className="group relative bg-gradient-to-r from-comic-primary to-comic-hero-600 hover:from-comic-hero-700 hover:to-comic-primary text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-comic-hero-300 shadow-2xl hover:shadow-comic-primary/25"
                                onClick={() => window.location.href = '/dashboard'}
                                aria-label="Explore comics collection"
                            >
                                <span className="relative z-10">Explore Comics</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-comic-primary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-comic-primary/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-comic-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-comic-primary to-comic-hero-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-bounce-slow">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-2xl font-bold mb-4 group-hover:text-comic-hero-200 transition-colors duration-300">Vast Collection</h2>
                                    <p className="text-gray-200 text-lg group-hover:text-gray-100 transition-colors duration-300">Thousands of comics from Marvel and beyond</p>
                                </div>
                            </div>
                            
                            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-comic-secondary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-comic-secondary/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-comic-secondary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-comic-secondary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-bounce-slow">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors duration-300">Easy Discovery</h2>
                                    <p className="text-gray-200 text-lg group-hover:text-gray-100 transition-colors duration-300">Search by title, creator, or character</p>
                                </div>
                            </div>
                            
                            <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-comic-electric-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-comic-electric-500/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-comic-electric-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-comic-electric-500 to-comic-electric-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-bounce-slow">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-2xl font-bold mb-4 group-hover:text-green-200 transition-colors duration-300">Curated Quality</h2>
                                    <p className="text-gray-200 text-lg group-hover:text-gray-100 transition-colors duration-300">Hand-picked selection of the best stories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}