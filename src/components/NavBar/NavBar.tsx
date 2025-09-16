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
        <nav className="bg-gray-800 shadow-lg" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                    
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center">
                                <img 
                                    className="h-8 w-auto" 
                                    src={ComicVerseLogo} 
                                    alt="ComicVerse - Navigate to homepage" 
                                />
                            </Link>
                        </div>
                        
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4" role="menubar">
                                <Link 
                                    to="/" 
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isActivePath('/') 
                                            ? 'bg-gray-900 text-white' 
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                    role="menuitem"
                                    aria-current={isActivePath('/') ? 'page' : undefined}
                                >
                                    Home
                                </Link>
                                <Link 
                                    to="/dashboard" 
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isActivePath('/dashboard') 
                                            ? 'bg-gray-900 text-white' 
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                    role="menuitem"
                                    aria-current={isActivePath('/dashboard') ? 'page' : undefined}
                                >
                                    Dashboard
                                </Link>
                                <Link 
                                    to="/about" 
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isActivePath('/about') 
                                            ? 'bg-gray-900 text-white' 
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                    role="menuitem"
                                    aria-current={isActivePath('/about') ? 'page' : undefined}
                                >
                                    About
                                </Link>
                                <Link 
                                    to="/login" 
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isActivePath('/login') 
                                            ? 'bg-gray-900 text-white' 
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                    role="menuitem"
                                    aria-current={isActivePath('/login') ? 'page' : undefined}
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/signup" 
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isActivePath('/signup') 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-blue-500 text-white hover:bg-blue-600'
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
                <div className="px-2 pt-2 pb-3 space-y-1" role="menu">
                    <Link 
                        to="/" 
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                            isActivePath('/') 
                                ? 'bg-gray-900 text-white' 
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                        role="menuitem"
                        aria-current={isActivePath('/') ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/dashboard" 
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                            isActivePath('/dashboard') 
                                ? 'bg-gray-900 text-white' 
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                        role="menuitem"
                        aria-current={isActivePath('/dashboard') ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Dashboard
                    </Link>
                    <Link 
                        to="/about" 
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                            isActivePath('/about') 
                                ? 'bg-gray-900 text-white' 
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                        role="menuitem"
                        aria-current={isActivePath('/about') ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link 
                        to="/login" 
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                            isActivePath('/login') 
                                ? 'bg-gray-900 text-white' 
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                        role="menuitem"
                        aria-current={isActivePath('/login') ? 'page' : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Login
                    </Link>
                    <Link 
                        to="/signup" 
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                            isActivePath('/signup') 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-blue-500 text-white hover:bg-blue-600'
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