import { useEffect, useState } from "react";
import { Comic } from "../../../Pages/Dashboard/Interfaces/Dashboard.interfaces";

export const useComicContainer = (listComics: Comic[]) => {
    const [comicList, setComicsList] = useState<Comic[]>(listComics);
    const [filter, setFilter] = useState<string>("");

    const filterComics = (search: string, comics: Comic[]) => {
        if (!search) {
            return comics;
        }
        return comics.filter((comic) => {
            const titleMatch = comic.title.toLowerCase().includes(search.toLowerCase());
            const charactersMatch = comic.characters && comic.characters.items[0]?.name.toLowerCase().includes(search.toLowerCase());
            const creatorsMatch = comic.creators && comic.creators.items && comic.creators.items[0] && comic.creators.items[0].name.toLowerCase().includes(search.toLowerCase());
            return titleMatch || charactersMatch || creatorsMatch;
        });
    };

    useEffect(() => {
        if(filter) {
            const filteredList = filterComics(filter, listComics);
            setComicsList(filteredList)
        } else {
            setComicsList(listComics);
        }        
    }, [filter, listComics]);

    useEffect(() => {
        setComicsList(listComics);
    }, [listComics]);

    return { comicList, setFilter };
}