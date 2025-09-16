import { Link, useLocation } from "react-router-dom"
import ComicVerseLogo from "../../assets/text.png"
import { useState } from "react"

export const NavBar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const isActivePath = (path: string) => location.pathname === path;
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-comic-dark via-gray-800 to-comic-dark shadow-2xl border-b border-comic-primary/20" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-18">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-comic-primary/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-comic-primary transition-all duration-300"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start py-2">
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center group">
                                <img 
                                    className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
                                    src={ComicVerseLogo} 
                                    alt="ComicVerse - Navigate to homepage" 
                                />
                            </Link>
                        </div>
                        
                        <div className="hidden sm:block sm:ml-8">
                            <div className="flex space-x-2" role="menubar">
                                <Link 
                                    to="/" 
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                        isActivePath('/') 
                                            ? 'bg-gradient-to-r from-comic-primary to-comic-hero-600 text-white shadow-lg' 
                                            : 'text-gray-300 hover:bg-comic-primary/20 hover:text-white'
                                    }`}
                                    role="menuitem"
                                    aria-current={isActivePath('/') ? 'page' : undefined}
                                >
                                    Home
                                </Link>
                                <Link 
                                    to="/dashboard" 
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                        isActivePath('/dashboard') 
                                            ? 'bg-gradient-to-r from-comic-secondary to-blue-600 text-white shadow-lg' 
                                            : 'text-gray-300 hover:bg-comic-secondary/20 hover:text-white'
                                    }`}
                                    role="menuitem"
                                    aria-current={isActivePath('/dashboard') ? 'page' : undefined}
                                >
                                    Dashboard
                                </Link>
                                <Link 
                                    to="/about" 
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                        isActivePath('/about') 
                                            ? 'bg-gradient-to-r from-comic-accent to-comic-cosmic-600 text-white shadow-lg' 
                                            : 'text-gray-300 hover:bg-comic-accent/20 hover:text-white'
                                    }`}
                                    role="menuitem"
                                    aria-current={isActivePath('/about') ? 'page' : undefined}
                                >
                                    About
                                </Link>
                                <Link 
                                    to="/login" 
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                                        isActivePath('/login') 
                                            ? 'bg-gradient-to-r from-comic-electric-500 to-comic-electric-600 text-white shadow-lg' 
                                            : 'text-gray-300 hover:bg-comic-electric-500/20 hover:text-white'
                                    }`}
                                    role="menuitem"
                                    aria-current={isActivePath('/login') ? 'page' : undefined}
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/signup" 
                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isActivePath('/signup') 
                                            ? 'bg-gradient-to-r from-comic-warning to-yellow-600 text-white shadow-lg' 
                                            : 'bg-gradient-to-r from-comic-secondary to-blue-600 text-white hover:from-blue-600 hover:to-comic-secondary shadow-md hover:shadow-lg'
                                    }`}
                                    role="menuitem"
                                    aria-current={isActivePath('/signup') ? 'page' : undefined}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu */}
            <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-b from-comic-dark to-gray-900 border-t border-comic-primary/20" role="menu">
                    <Link 
                        to="/" 
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                            isActivePath('/') 
                                ? 'bg-gradient-to-r from-comic-primary to-comic-hero-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-comic-primary/20 hover:text-white'
                        }`}
                        role="menuitem"
                        aria-current={isActivePath('/') ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/dashboard" 
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                            isActivePath('/dashboard') 
                                ? 'bg-gradient-to-r from-comic-secondary to-blue-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-comic-secondary/20 hover:text-white'
                        }`}
                        role="menuitem"
                        aria-current={isActivePath('/dashboard') ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Dashboard
                    </Link>
                    <Link 
                        to="/about" 
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                            isActivePath('/about') 
                                ? 'bg-gradient-to-r from-comic-accent to-comic-cosmic-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-comic-accent/20 hover:text-white'
                        }`}
                        role="menuitem"
                        aria-current={isActivePath('/about') ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link 
                        to="/login" 
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                            isActivePath('/login') 
                                ? 'bg-gradient-to-r from-comic-electric-500 to-comic-electric-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-comic-electric-500/20 hover:text-white'
                        }`}
                        role="menuitem"
                        aria-current={isActivePath('/login') ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Login
                    </Link>
                    <Link 
                        to="/signup" 
                        className={`block px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                            isActivePath('/signup') 
                                ? 'bg-gradient-to-r from-comic-warning to-yellow-600 text-white shadow-lg' 
                                : 'bg-gradient-to-r from-comic-secondary to-blue-600 text-white hover:from-blue-600 hover:to-comic-secondary shadow-md'
                        }`}
                        role="menuitem"
                        aria-current={isActivePath('/signup') ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    )
}