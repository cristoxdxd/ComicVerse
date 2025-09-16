import { useParams, Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/NavBar';

export const ComicDetail = () => {
    const { title } = useParams<{ title: string }>();
    
    // In a real app, you would fetch comic details by ID
    // For now, we'll use the title from params
    const decodedTitle = title ? decodeURIComponent(title) : 'Comic Details';
    
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <ol className="flex space-x-2 text-sm text-gray-600">
                            <li>
                                <Link to="/" className="hover:text-blue-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li>
                                <Link to="/dashboard" className="hover:text-blue-600 transition-colors">
                                    Comics
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li className="text-gray-900 font-medium" aria-current="page">
                                {decodedTitle}
                            </li>
                        </ol>
                    </nav>
                    
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    {decodedTitle}
                                </h1>
                                <div className="w-32 h-1 bg-blue-600 mx-auto rounded"></div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    {/* Placeholder for comic cover */}
                                    <div className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center">
                                        <div className="text-center">
                                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                            <p className="text-gray-600">Comic Cover</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Comic Information</h2>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Title</h3>
                                            <p className="text-gray-900">{decodedTitle}</p>
                                        </div>
                                        
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Creator</h3>
                                            <p className="text-gray-900">Marvel Comics</p>
                                        </div>
                                        
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Description</h3>
                                            <p className="text-gray-900">
                                                This is a placeholder comic detail page. In a full implementation, 
                                                this would fetch real comic data from the API including description, 
                                                creators, publication date, and more detailed information.
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Status</h3>
                                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                Available
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8 flex space-x-4">
                                        <button 
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                                            disabled
                                        >
                                            Read Now (Coming Soon)
                                        </button>
                                        <button 
                                            className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300"
                                            disabled
                                        >
                                            Add to Favorites
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                        <Link 
                            to="/dashboard"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                            </svg>
                            Back to Comics
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};