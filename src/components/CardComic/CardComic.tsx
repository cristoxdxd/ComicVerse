export const CardComic = () => {
    return (
        <div className="flex flex-col items-start rounded-xl bg-teal-700 border-1 border-solid border-black m-10 w-fit">
            <div className="relative">
                <img className="rounded-xl" src="https://thumb-g1.toomics.com/upload/thumbnail/20221226103102/2023_01_03_16727493442667.jpg" alt="" />
                <div className="flex flex-col absolute w-full rounded-xl items-start bottom-0 bg-gradient-to-t from-black to-transparent">
                    <h4 className="text-white text-2xl m-2">Title</h4>
                    <p className="text-gray-400 m-1 pb-15">Creator</p>
                </div>
            </div>
        </div>
    )
}
