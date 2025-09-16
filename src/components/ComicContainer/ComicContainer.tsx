import { ChangeEvent } from "react"
import { CardComic } from "../CardComic/CardComic"
import { useComicContainer } from "./State/useComicContainer";
import { Comic } from "../../Pages/Dashboard/Interfaces/Dashboard.interfaces";

export interface IComicContainerProps {
    listComics: Comic[];
    loading?: boolean;
    loadMore?: () => void;
    hasMore?: boolean;
}

const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-12">
        <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-comic-primary/20"></div>
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-comic-primary border-t-transparent absolute inset-0"></div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
);

const ComicSkeleton = () => (
    <div className="flex flex-col items-start rounded-2xl border border-gray-200/50 bg-white shadow-lg m-4 w-fit animate-pulse overflow-hidden">
        <div className="relative">
            <div className="w-48 h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-2xl"></div>
            <div className="flex flex-col absolute w-full rounded-b-2xl items-start bottom-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="h-6 bg-gray-400/80 rounded-lg w-3/4 m-3"></div>
                <div className="h-4 bg-gray-500/80 rounded-lg w-1/2 mx-3 mb-4"></div>
            </div>
        </div>
    </div>
);

export const ComicContainer = ({ listComics, loading = false, loadMore, hasMore = true }: IComicContainerProps) => {
    const { comicList, setFilter } = useComicContainer(listComics);

    return (
        <div className="min-h-screen bg-gradient-to-br from-comic-dark via-gray-900 to-comic-dark">
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
                {/* Enhanced search section */}
                <div className="mb-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-white mb-2">Search Comics</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-comic-primary to-comic-secondary mx-auto rounded-full"></div>
                    </div>
                    <label htmlFor="comic-search" className="sr-only">Search Comics</label>
                    <input
                        id="comic-search"
                        type="text"
                        placeholder="Search Comic by title, creator, or character..."
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setFilter(e.target.value.trim().toLowerCase())
                        }
                        className="w-full border-2 border-white/20 bg-white/10 backdrop-blur-sm rounded-xl py-4 px-6 text-white placeholder-gray-300 leading-tight focus:outline-none focus:border-comic-primary focus:ring-2 focus:ring-comic-primary/30 transition-all duration-300 text-lg"
                        aria-describedby="search-help"
                    />
                    <p id="search-help" className="text-sm text-gray-300 mt-3 text-center">
                        Search through our comic collection
                    </p>
                </div>
                
                {loading && comicList.length === 0 ? (
                    <div className="min-h-[400px] flex flex-col items-center justify-center">
                        <LoadingSpinner />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mt-8">
                            {Array.from({ length: 8 }, (_, i) => (
                                <ComicSkeleton key={i} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                        {comicList.length !== 0 ? (
                            <>
                                {comicList.map((comic: Comic, index: number) => (
                                    <CardComic
                                        key={`${comic.title}-${index}`}
                                        title={comic.title}
                                        creators={comic.creators.items && comic.creators.items.length > 0 ? comic.creators.items[0].name : "Unknown Creator"}
                                        image={comic.image && comic.image.length > 0 ? comic.image : "https://cdn.marvel.com/u/prod/marvel/i/mg/b/40/image_not_available/clean.jpg"} 
                                    />
                                ))}
                                
                                {loadMore && (
                                    <div className="col-span-full flex justify-center mt-12">
                                        {loading ? (
                                            <LoadingSpinner />
                                        ) : hasMore ? (
                                            <button 
                                                type="button"
                                                className="group relative bg-gradient-to-r from-comic-secondary to-blue-600 hover:from-blue-600 hover:to-comic-secondary text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-comic-secondary/30"
                                                onClick={loadMore}
                                                disabled={loading}
                                                aria-label="Load more comics"
                                            >
                                                <span className="relative z-10">
                                                    {loading ? 'Loading...' : 'Load More Comics'}
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </button>
                                        ) : (
                                            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                                                <p className="text-gray-200 text-lg font-medium text-center">
                                                    🎉 You've reached the end of our comic collection!
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-20">
                                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/20 text-center max-w-lg">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-comic-primary/20 to-comic-secondary/20 rounded-full flex items-center justify-center">
                                        <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-2xl font-bold mb-4">No Comics Found</h2>
                                    <p className="text-gray-300 text-lg">
                                        We couldn't find any comics matching your search. Try different keywords or explore our full collection.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
