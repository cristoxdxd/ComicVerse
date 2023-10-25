import { ChangeEvent } from "react"
import { CardComic } from "../CardComic/CardComic"
import { useComicContainer } from "./State/useComicContainer";
import { Comic } from "../../Pages/Dashboard/Interfaces/Dashboard.interfaces";

export interface IComicContainerProps {
    listComics: Comic[];
}

export const ComicContainer = ({ listComics }: IComicContainerProps) => {
    const { comicList, setFilter } = useComicContainer(listComics);

    return (
        <div className="flex justify-center items-center">
            <div>
                <input
                    type="text"
                    placeholder="Search Comic"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFilter(e.target.value.trim().toLowerCase())
                    }
                    className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                    {comicList.length !== 0 ?(
                        <>
                                {comicList.map((comic: Comic) => (
                                    <CardComic
                                        title={comic.title}
                                        creators={comic.creators.items && comic.creators.items.length > 0 ? comic.creators.items[0].name : ""}
                                        image={comic.image && comic.image.length > 0 ? comic.image : "https://cdn.marvel.com/u/prod/marvel/i/mg/b/40/image_not_available/clean.jpg"} />
                                ))}
                                <button 
                                    type="button"
                                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-500 ease-in-out transform hover:scale-105 inline-flex items-center h-10 mx-auto mt-8"
                                    onClick={() => console.log("Load more clicked")}
                                    >Load More</button>
                            </>
                        
                    ) : (
                        <h1 className="text-white text-2xl font-bold mt-4">No Comics Found</h1>
                    )}
                </div>
            </div>
        </div>
    );
};
