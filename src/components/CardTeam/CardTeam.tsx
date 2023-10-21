import { ITeam } from "../../constants/Team";

export const CardTeam = ({name, imgURL, description}: ITeam) => {
    return (
        <div className="flex flex-col items-center justify-center sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gray-800 rounded-lg shadow-lg m-1 mt-10">
            <img className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover mt-4" src={imgURL} alt={name} />
            <h3 className="text-lg sm:text-xl font-medium mt-4 text-white">{name}</h3>
            <p className="text-center text-gray-400 px-4 mt-2 flex-1 text-sm sm:text-base md:text-lg lg:text-xl">{description}</p>
        </div>
    )
}