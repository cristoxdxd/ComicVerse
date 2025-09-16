import { ComicContainer } from "../../components/ComicContainer/ComicContainer";
import { NavBar } from "../../components/NavBar/NavBar"
import { useDashboard } from "./State/useDashboard"

export const Dashboard = () => {
    const { listComics, loading, error, loadMore, hasMore } = useDashboard();

    return (
        <>
            <NavBar />
            {error ? (
                <div className="min-h-screen bg-gradient-to-br from-comic-dark via-gray-900 to-comic-dark flex justify-center items-center px-4">
                    <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-md border border-red-400/30 text-red-100 px-8 py-6 rounded-2xl max-w-md text-center shadow-2xl" role="alert">
                        <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Oops! Something went wrong</h3>
                        <p className="text-red-200">{error}</p>
                    </div>
                </div>
            ) : (
                <ComicContainer 
                    listComics={listComics} 
                    loading={loading}
                    loadMore={loadMore}
                    hasMore={hasMore}
                />
            )}
        </>
    )
}