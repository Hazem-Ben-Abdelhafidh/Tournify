import { format, formatDistance } from "date-fns";
import { Data } from "../Users/types";
type Props = {
    name: string,
    game: string,
    numberOfTeams: number;
    cost: number;
    createdAt: Date;
    startTime: Date;
    owner: Data;
}

const SingleTournament = (props: Props) => {
    return (
        <div className="bg-neutral-500  font-normal shadow-2xl w-4/5 md:w-2/3 my-3 p-3 grid grid-rows-3 grid-cols-3" >
            <div className="flex flex-col col-span-3">
                <span>{props.owner.name}</span>
                <span className="text-xs"> {formatDistance(new Date(), new Date(props.createdAt))} ago</span>
            </div>
            <h3 className=" col-span-3 font-bold text-xl  flex justify-center items-center">{props.name}</h3>
            <h4 className="  text-center   font-bold col-span-3">Game &#x1F3AE;: {props.game}</h4>
            <span className=" flex justify-center items-center col-span-3">Number Of Teams: {props.numberOfTeams}</span>
            <span className=" col-span-3 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg> Inscription fee: {props.cost}</span>
            <span className="col col-span-3 p-3 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg> Starting Date : {format(new Date(props.startTime), "dd-MM-yyyy")}</span>
            <button className='p-2 bg-orange-600 shadow-lg hover:bg-orange-700 transition-colors col-start-3 col-end-3 justify-end'>Join</button>
        </div>
    )
}

export default SingleTournament