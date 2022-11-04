import { useState } from "react";
import { userAPI } from "../api/userAPI";
import Input from "./UI/Input";


const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
        return (
            <div className="w-[600px] p-10 rounded-xl bg-white absolute top-40 left-1/2 -translate-x-1/2 text-gray-600 text-md">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                        Welcome to Quiz
                    </h1>
                    <p className="w-80 text-center mb-8 font-semibold tracking-wide cursor-pointer mx-auto">
                        Create a Quiz Account
                    </p>
                </div>
                <form>
                    <div className="space-y-4">
                        <Input value={email} setValue={setEmail} type="email" placeholder="Email"  />
                        <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
                    </div>
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="py-3 w-full text-lg text-white bg-yellow-400 rounded-lg hover:bg-yellow-300 active:bg-yellow-500 outline-none"
                            onClick={() => userAPI.createUser(email, password)}
                        >   Sign Up
                        </button>
                    </div>
                    <p className="w-full text-center my-3 font-semibold">
					    or
				    </p>
					<button
						type="submit"
						className="py-3 w-full text-lg bg-slate-200 rounded-lg hover:bg-slate-100 active:bg-slate-300 outline-none"
					>
						Continue with Auth0
					</button>
                </form>
            </div>
        );
}

export default SignUp;
