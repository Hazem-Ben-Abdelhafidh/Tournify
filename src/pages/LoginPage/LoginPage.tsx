import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks";
import Logo from "../../Components/Logo"
import { setCredentials } from "../../features/Users/authSlice";
import { useLoginMutation } from "../../features/Users/UsersSlice";
import Modal from "../../utils/Modal/Modal";
import Spinner from "../../utils/Spinner/Spinner";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { isLoading, isSuccess, data }] = useLoginMutation()
    const dispatch = useAppDispatch();
    const signin = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            await login({ email, password }).unwrap();
            navigate("/")
        }
        catch {
            console.log("problem...")
        }
    }
    if (isSuccess) {

        dispatch(setCredentials({ accessToken: data?.accessToken, user: data?.data }))
        sessionStorage.setItem("accessToken", data?.accessToken!)
    }
    return (
        <section className="form">
            <Logo />
            <form onSubmit={signin} className=" relative bg-neutral-700 shadow-2xl w-4/5 h-64 flex flex-col justify-around items-center p-3 md:w-1/3 lg:w-1/2">
                {isLoading ? <Modal><Spinner /></Modal> : null}
                <h1 className="font-bold mb-2 text-4xl">Login &#x1F590;</h1>
                <input onChange={e => setEmail(e.target.value)} value={email} className="input" type="email" placeholder="Email" />
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" className="input" placeholder="password" />
                <Link to="/signup" className=" justify-end hover:text-orange-600 transition duration-300">Don't have an account? signup</Link>
                <button type="submit" className=" bg-orange-600 shadow-xl p-2 hover:bg-orange-700 transition-colors font-semibold  w-full ">Login</button>
            </form>
        </section>
    )
}

export default LoginPage 