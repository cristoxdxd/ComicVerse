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
    <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="sr-only">Loading...</span>
    </div>
);

const ComicSkeleton = () => (
    <div className="flex flex-col items-start rounded-xl border border-gray-200 m-10 w-fit animate-pulse">
        <div className="relative">
            <div className="w-48 h-72 bg-gray-300 rounded-xl"></div>
            <div className="flex flex-col absolute w-full rounded-xl items-start bottom-0 bg-gradient-to-t from-black to-transparent">
                <div className="h-6 bg-gray-400 rounded w-3/4 m-2"></div>
                <div className="h-4 bg-gray-500 rounded w-1/2 m-1 mb-4"></div>
            </div>
        </div>
    </div>
);

export const ComicContainer = ({ listComics, loading = false, loadMore, hasMore = true }: IComicContainerProps) => {
    const { comicList, setFilter } = useComicContainer(listComics);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-7xl px-4">
                <div className="mb-6">
                    <label htmlFor="comic-search" className="sr-only">Search Comics</label>
                    <input
                        id="comic-search"
                        type="text"
                        placeholder="Search Comic by title, creator, or character..."
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setFilter(e.target.value.trim().toLowerCase())
                        }
                        className="w-full border-2 border-gray-300 rounded-lg py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        aria-describedby="search-help"
                    />
                    <p id="search-help" className="text-sm text-gray-600 mt-1">
                        Search through our comic collection
                    </p>
                </div>
                
                {loading && comicList.length === 0 ? (
                    <div>
                        <LoadingSpinner />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {Array.from({ length: 6 }, (_, i) => (
                                <ComicSkeleton key={i} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
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
                                    <div className="col-span-full flex justify-center mt-8">
                                        {loading ? (
                                            <LoadingSpinner />
                                        ) : hasMore ? (
                                            <button 
                                                type="button"
                                                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                                onClick={loadMore}
                                                disabled={loading}
                                                aria-label="Load more comics"
                                            >
                                                {loading ? 'Loading...' : 'Load More Comics'}
                                            </button>
                                        ) : (
                                            <p className="text-gray-600 text-lg font-medium">
                                                You've reached the end of our comic collection!
                                            </p>
                                        )}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-12">
                                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <h2 className="text-gray-900 text-2xl font-bold mb-2">No Comics Found</h2>
                                <p className="text-gray-600 text-center">
                                    We couldn't find any comics matching your search. Try different keywords.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
