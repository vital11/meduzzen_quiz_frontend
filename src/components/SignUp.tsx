import { useState } from "react";
import { userAPI } from "../api/userAPI";
import Input from "./UI/Input";


const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
        return (
            <div className="w-[600px] m-5 p-10 rounded-xl bg-gray-100 absolute top-40 left-1/2 -translate-x-1/2">
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer"> Welcome to Quiz </h1>
                <p className="w-80 text-center mb-8 font-medium tracking-wide cursor-pointer mx-auto"> Create a Quiz Account </p>
                <form className="space-y-4">
                    <Input value={email} setValue={setEmail} type="email" placeholder="Email" />
                    <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
                    <button
                        type="submit"
                        className="w-full py-3 text-center text-lg text-white bg-amber-400 rounded-lg hover:bg-amber-300 active:bg-amber-500 outline-none"
                        onClick={() => userAPI.createUser(email, password)}
                    >   Sign Up
                    </button>
                    <p className="w-full text-center font-medium"> or </p>
                    <button
                        type="submit"
                        className="py-3 w-full text-lg bg-gray-300 rounded-lg hover:bg-gray-200 active:bg-gray-400 outline-none"
                    >   Continue with Auth0
                    </button>
                </form>
            </div>
        );
}

export default SignUp;
