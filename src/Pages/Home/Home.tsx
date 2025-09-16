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
                className="relative min-h-screen bg-gray-900 py-20" 
                style={{ 
                    backgroundImage: `url(${comicBackground})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
                aria-label="ComicVerse home page hero section"
            >
                {/* Improved overlay for better accessibility */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 
                            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight transition-colors duration-300 ${isHovering ? 'text-red-400' : 'text-white'}`} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}
                        >
                            Welcome to ComicVerse
                        </h1>
                        <p 
                            className={`mt-6 max-w-3xl mx-auto text-xl md:text-2xl transition-colors duration-300 ${isHovering ? 'text-red-300' : 'text-gray-100'}`} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}
                        >
                            Discover your next favorite story in our vast collection of comics and graphic novels.
                        </p>
                        
                        <div className="mt-10">
                            <button 
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg"
                                onClick={() => window.location.href = '/dashboard'}
                                aria-label="Explore comics collection"
                            >
                                Explore Comics
                            </button>
                        </div>
                        
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                                <h2 className="text-white text-xl font-bold mb-2">Vast Collection</h2>
                                <p className="text-gray-200">Thousands of comics from Marvel and beyond</p>
                            </div>
                            
                            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-white text-xl font-bold mb-2">Easy Discovery</h2>
                                <p className="text-gray-200">Search by title, creator, or character</p>
                            </div>
                            
                            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-white text-xl font-bold mb-2">Curated Quality</h2>
                                <p className="text-gray-200">Hand-picked selection of the best stories</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Decorative border - only shows on hover for better accessibility */}
                <div 
                    className={`absolute inset-0 border-4 rounded-lg transition-all duration-300 ${isHovering ? 'border-red-500 shadow-2xl border-opacity-70' : 'border-transparent'}`} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    aria-hidden="true"
                ></div>
            </main>
        </>
    )
}