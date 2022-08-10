import { useLocation } from "react-router-dom"

const Logo = () => {
    const location = useLocation();
    console.log(location)
    return (
        <h1 className={` font-primary text-white mr-3 ${location.pathname === "/" ? null : "mb-6"} text-4xl`}> <span className='text-orange-600'>T</span><span className={location.pathname === "/" ? `hidden md:inline` : ''}>ournify</span></h1>
    )
}

export default Logo