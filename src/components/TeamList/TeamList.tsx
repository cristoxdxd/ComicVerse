import { ITeam } from "../../constants/Team";
import { CardTeam } from "../CardTeam/CardTeam";
import { useTeamList } from "./State/useTeamList";


export const TeamList = () => {
    const { teamList } = useTeamList();

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
        {teamList.map((team: ITeam) => (
            <CardTeam
                name={team.name}
                imgURL={team.imgURL}
                description={team.description}
            />))
        };
        </div>
    );
}