import { formatDistance } from "date-fns";
import Spinner from "../../utils/Spinner/Spinner";
import SingleTournament from "./SingleTournament";
import { useGetTournamentsQuery } from "./tournamentsSlice"
import { Tournament } from "./types";

const TournamentsList = () => {
    const { data, isLoading, isError, error } = useGetTournamentsQuery();
    if (isLoading) {
        return <Spinner />
    }
    const content = data?.tournaments?.map((tournament: Tournament) => {
        return (<SingleTournament key={tournament.id} startTime={tournament.startTime}
            name={tournament.name} createdAt={tournament.createdAt}
            cost={tournament.cost} numberOfTeams={tournament.numberOfTeams}
            game={tournament.game} owner={tournament.owner} />)
    })
    return (
        <div className="flex min-h-full flex-col p-3 justify-center items-center">
            {content}
        </div>
    )
}

export default TournamentsList