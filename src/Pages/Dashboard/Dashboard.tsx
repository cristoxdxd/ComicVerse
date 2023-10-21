import { CardComic } from "../../components/CardComic/CardComic"
import { NavBar } from "../../components/NavBar/NavBar"
import { useDashboard } from "./State/useDashboard"

export const Dashboard = () => {
    useDashboard();

    return (
        <>
        <NavBar />
        <br></br>
        <div className='flex wrap'>
            <CardComic />
            <CardComic />
            <CardComic />
        </div>
        </>
    )
}