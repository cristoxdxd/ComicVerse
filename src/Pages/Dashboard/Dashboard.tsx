import { ComicContainer } from "../../components/ComicContainer/ComicContainer";
import { NavBar } from "../../components/NavBar/NavBar"
import { useDashboard } from "./State/useDashboard"

export const Dashboard = () => {
    const { listComics } = useDashboard();

    return (
        <>
        <NavBar />
        <br></br>
        <ComicContainer listComics={listComics}/>
        </>
    )
}