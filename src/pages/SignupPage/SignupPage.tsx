import Logo from "../../Components/Logo"

const SignupPage = () => {
    return (
        <section className="form">
            <Logo />
            <form className=" bg-neutral-700 shadow-2xl w-4/5 h-72 flex flex-col justify-around items-center p-3 md:w-1/3 lg:w-1/2">
                <h1 className="font-bold mb-2 text-4xl">Sign up!</h1>
                <input className="input" type="text" placeholder="Username" />
                <input className="input" type="email" placeholder="Email" />
                <input type="password" className="input" placeholder="password" />
                <button type="submit" className=" bg-orange-600 shadow-xl p-2 hover:bg-orange-700 transition-colors font-semibold  w-full ">Login</button>
            </form>
        </section>
    )
}

export default SignupPage