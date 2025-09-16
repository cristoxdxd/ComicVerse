import { ComicContainer } from "../../components/ComicContainer/ComicContainer";
import { NavBar } from "../../components/NavBar/NavBar"
import { useDashboard } from "./State/useDashboard"

export const Dashboard = () => {
    const { listComics, loading, error, loadMore, hasMore } = useDashboard();

    return (
        <>
        <NavBar />
        <br></br>
        {error ? (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md text-center" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            </div>
        ) : (
            <ComicContainer 
                listComics={listComics} 
                loading={loading}
                loadMore={loadMore}
                hasMore={hasMore}
            />
        )}
        </>
    )
}