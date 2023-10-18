export const CardComic = () => {
    return (
        <div className="flex flex-col items-start rounded-xl bg-teal-700 border-1 border-solid border-black m-10 w-fit">
            <img className="rounded-xl relative" src="https://thumb-g1.toomics.com/upload/thumbnail/20221226103102/2023_01_03_16727493442667.jpg" alt="" />
            <div className="flex flex-col absolute w-1/5 rounded-xl items-start pt-80 bg-gradient-to-t from-black to-transparent">
                <h4 className="text-white text-2xl m-2">Title</h4>
                <p className="text-gray-400 m-1 pb-15">Creator</p>
                {/* <p classNAme="truncate">Description</p> */}
            </div>
        </div>
    )
}

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=6942bd8d53595424497f8dce4cfbd36e&hash=c05143fc9f7aa4d716308fd8db4d1ae9
