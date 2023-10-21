import { useEffect, useState } from "react";
import { ITeam, Team } from "../../../constants/Team";

export const useTeamList = () => {
    const [teamList, setTeamList] = useState<ITeam[]>(Team);

    useEffect(() => {
        if (teamList.length === 0)
            setTeamList(Team);
    }, [teamList]);

    return {teamList, setTeamList};
}