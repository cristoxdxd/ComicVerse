import { useEffect, useState } from "react";
import { Comic } from "../Interfaces/Dashboard.interfaces";

export const useDashboard = () => {
    const [listComics, setListComics] = useState<Comic[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    
    const limit = 20; // Number of comics per request

    useEffect(() => {
        const getComics = async() => {
            try {
                setLoading(true);
                setError(null);
                
                const apiUrl = import.meta.env.VITE_COMICS_API_BASE_PATH;
                if (!apiUrl) {
                    throw new Error('API URL is not configured');
                }
                
                const response = await fetch(`${apiUrl}&limit=${limit}&offset=${offset}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();

                const comicsIDs = data.data.results.map((comic: Comic) => comic);
                
                const processedComics = comicsIDs.map((comic: {
                    title: string;
                    images: {
                        path: string;
                        extension: string;
                    }[];
                    creators: {
                        items: {
                            name: string;
                        }[];
                    }
                }) => {
                    if (comic.images.length === 0){
                        return {
                            title: comic.title,
                            image: "",
                            creators: comic.creators,
                        };
                    }
                    const imageData = `${comic.images[0].path}.${comic.images[0].extension}`;
                  
                    return {
                      title: comic.title,
                      image: imageData,
                      creators: comic.creators,
                    };
                });

                if (offset === 0) {
                    setListComics(processedComics);
                } else {
                    setListComics(prev => [...prev, ...processedComics]);
                }
                
                // Check if there are more comics to load
                setHasMore(data.data.total > offset + limit);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                console.error('Error fetching comics:', err);
            } finally {
                setLoading(false);
            }
        };

        getComics();
    }, [offset]);

    const loadMore = () => {
        if (!loading && hasMore) {
            setOffset(prev => prev + limit);
        }
    };

    return {
        listComics,
        loading,
        error,
        loadMore,
        hasMore,
    };
};
