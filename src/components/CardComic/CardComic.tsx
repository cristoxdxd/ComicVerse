export const CardComic = ({ title, creators, image }: { title: string, creators: string, image: string }) => {
    
    return (
        <div className="flex flex-col items-start rounded-xl border-1 border-solid border-black m-10 w-fit">
            <div className="relative">
                <img className="rounded-xl" src={ image } alt={ title } />
                <div className="flex flex-col absolute w-full rounded-xl items-start bottom-0 bg-gradient-to-t from-black to-transparent">
                    <h4 className="text-white text-2xl m-2">{ title }</h4>
                    <p className="text-gray-400 m-1 pb-15">{ creators }</p>
                </div>
            </div>
        </div>
    );
};
