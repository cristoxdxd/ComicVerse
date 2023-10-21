import { useEffect, useState } from "react";

export const useDashboard = () => {
    const [listComics, setListComics] = useState([]);

    useEffect(() => {
        const getComics = async() => {
            const response = await fetch(import.meta.env.VITE_COMICS_API_BASE_PATH);
            const data = await response.json();

            const comicsIDs = data.data.results.map((comic: any) => comic.id);
            
            const arrayPromises = comicsIDs.map(async (comic: {
                title: string;
                images: {
                    path: string;
                    extension: string;
                };
                creators: {
                    items: {
                        name: string;
                    }[];
                }
            }) => {
                const response = await fetch(`${comic.images.path}.${comic.images.extension}`);
                const imageData = await response.json();
              
                return {
                  title: comic.title,
                  image: imageData,
                  creators: comic.creators,
                };
              });

              setListComics(arrayPromises);

            //console.log(arrayPromises);

            //console.log(comicsIDs);
            //console.log(data);
        };

        getComics();

    }, []);

    return {
        listComics,
    };
};