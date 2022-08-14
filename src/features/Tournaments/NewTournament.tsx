import { z } from "zod"
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useAddNewTournamentMutation } from "./tournamentsSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const formSchema = z.object({
    name: z.string().min(8),
    game: z.string(),
    numberOfTeams: z.string({ invalid_type_error: "Please provide a number" }).transform(Number),
    cost: z.string({ invalid_type_error: "Please provide a number" }).transform(Number)
});
type FormSchemaType = z.infer<typeof formSchema>

const NewTournament = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [addNewTournament, { data, isLoading }] = useAddNewTournamentMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema)
    })
    const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
        await addNewTournament(data);

    }
    return (
        <section className="flex font-normal flex-col min-h-screen justify-center items-center">

            <h1 className="font-bold mb-4 text-center text-4xl">Create your own tournament! &#x1F3AE; </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="relative shadow-2xl w-4/5 flex flex-col justify-around items-center p-4 md:w-1/3 lg:w-1/2 bg-neutral-500" >
                <div className="flex justify-around items-center w-full">
                    <input autoComplete="off" className="input mr-2" type="text" placeholder="Name of the tournament" {...register("name")} />
                    {errors.name && (<p className="text-red-600">{errors.name.message}</p>)}
                    <input autoComplete="off" className="input" type="text" placeholder="Game name" {...register("game")} />
                    {errors.game && (<p className="text-red-600">{errors.game.message}</p>)}
                </div>
                <div className="flex justify-around items-center w-full">
                    <input className="input mr-2" autoComplete="off" type="text" placeholder="Number of Teams" {...register("numberOfTeams")} />
                    {errors.numberOfTeams && (<p className="text-red-600">{errors.numberOfTeams.message}</p>)}
                    <input className="input" type="text" autoComplete="off" placeholder="Cost" {...register("cost")} />
                    {errors.cost && (<p className="text-red-600">{errors.cost.message}</p>)}
                </div>
                <div className=" flex justify-around items-center w-full">
                    <span className="w-4/5 text-lg">Pick a starting date:</span>
                    <DatePicker minDate={new Date()} scrollableYearDropdown showYearDropdown dateFormat="yyyy-MM-dd" className="input" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                </div>

                <button type="submit" className="bg-orange-600 shadow-2xl p-2 hover:bg-orange-700 transition-colors font-semibold  w-full ">Create Tournament</button>
            </form>
        </section>
    )
}

export default NewTournament