import { AxiosError } from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { userAPI } from "../../api/userAPI";
import { IUserUpdate } from "../../types/user"
import LoginButton from "../UI/LoginButton"


const Login: React.FC = () => {
    const [loginForm, setLoginform] = useState<IUserUpdate>()
	const navigate = useNavigate()

    const changeFormHandler = (label: string, event: React.ChangeEvent<HTMLInputElement>) => {
		switch (label) {
			case "email":
				setLoginform({ ...loginForm, email: event.target.value })
				break
			case "password":
				setLoginform({ ...loginForm, password: event.target.value })
				break
		}
	}

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
        try {
            const data = await userAPI.login(loginForm)
			localStorage.setItem("auth_token", data.access_token)
			localStorage.setItem("auth_token_type", data.token_type)

			setTimeout(() => {
				window.location.reload()
			}, 100)
			navigate('/')
			
        } catch (e: unknown) {
            const error = e as AxiosError
            console.log(error.message)
        }
	}

    return (
		<div className="w-[600px] p-10 rounded-xl bg-white absolute top-30 left-1/2 -translate-x-1/2">
			<div>
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                    Welcome to Quiz
                </h1>
				<p className="w-80 text-center mb-8 font-medium tracking-wide cursor-pointer mx-auto">
					Login to your account
				</p>
			</div>
			<form className="space-y-4"
				onSubmit={submitHandler}
			>
				<input
					type="text"
					placeholder="Email"
					className="block text-md py-3 px-5 rounded-lg w-full border outline-none ocus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
					onChange={(event) => {changeFormHandler("email", event)}}
				/>
				<input
					type="password"
					placeholder="Password"
					className="block text-md py-3 px-5 rounded-lg w-full border outline-none ocus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
					onChange={(event) => {changeFormHandler("password", event)}}
				/>
				<button
					type="submit"
					className="w-full py-3 text-center text-lg text-white bg-amber-400 rounded-lg hover:bg-amber-300 active:bg-amber-500 outline-none"
				>	Sign In
				</button>
			</form>
			<p className="w-full text-center font-medium my-3">
				or 
			</p>
			<LoginButton />
		</div>
	)
}

export default Login
