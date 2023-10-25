import { useEffect, useState } from "react";
import { Comic } from "../Interfaces/Dashboard.interfaces";

export const useDashboard = () => {
    const [listComics, setListComics] = useState<Comic[]>([]);
    //const [offset, setOffset] = useState(0);

    useEffect(() => {
        const getComics = async() => {
            const response = await fetch(import.meta.env.VITE_COMICS_API_BASE_PATH);
            const data = await response.json();

            const comicsIDs = data.data.results.map((comic: any) => comic);
            
            const arrayPromises = comicsIDs.map((comic: {
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

              setListComics(arrayPromises);

            //console.log(arrayPromises);
        };

        getComics();

    }, []);

    // useEffect(() => {
    //     const getMoreComics = async() => {


    return {
        listComics,
    };
};
