import { useAppSelector } from "../../../app/hooks";

type Props = {}

const SearchBar = (props: Props) => {
    const clicked = useAppSelector(state => state.utils.clicked);
    return (
        <form className={clicked ? "flex absolute md:relative md:translate-y-0 w-full translate-y-[49px] transition-transform" : "flex absolute md:relative md:translate-y-0 -translate-y-[120%]"}>
            < input type="text" className=' bg-neutral-800 w-full md:bg-neutral-700 p-1 outline-none text-white' placeholder='Search...' />
            <button type="submit" className='p-2 bg-orange-600 hover:bg-orange-700 transition-colors'>Search</button>
        </form >
    )
}

export default SearchBar