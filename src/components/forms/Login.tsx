import { AxiosError } from "axios";
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { userAPI } from "../../api/userAPI";
import { IUserUpdate } from "../../types/user"
import LoginButton from "../UI/LoginButton"


export default function Login2() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<IUserUpdate>({ mode: 'onChange' })
	const navigate = useNavigate()

    const onSubmit = handleSubmit(( data ) => {
        (async () => {
            try {
                const token = await userAPI.login(data)
                localStorage.setItem("auth_token", token.access_token)
                localStorage.setItem("auth_token_type", token.token_type)
    
                setTimeout(() => {
                    window.location.reload()
                }, 100)
                navigate('/')
                
            } catch (e: unknown) {
                const error = e as AxiosError
                console.log(error.message)
            }
        })()
    })

    return (
		<div className="w-[600px] p-10 rounded-xl bg-white absolute top-30 left-1/2 -translate-x-1/2">
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                Welcome to Quiz
            </h1>
            <p className="w-80 text-center mb-8 font-medium tracking-wide cursor-pointer mx-auto">
                Login to your account
            </p>
			<form className="space-y-4" onSubmit={ onSubmit }>
                <>
                    <input
                        type="email"
                        placeholder="Email"
                        className="peer block text-md py-3 px-5 rounded-lg w-full border outline-none ocus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                        { ...register("email", {
                            required: true,
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                        })}
                    />
                    { errors.email && <p className="mt-2 invisible peer-invalid:visible text-red-300 text-md">
                        Please enter valid email address </p> }
                </>
                <>
                    <input
                        type="password"
                        placeholder="Password"
                        className="peer block text-md py-3 px-5 rounded-lg w-full border outline-none ocus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                        {...register("password", {
                            required: true,
                            minLength: 1,
                        })}
                    />
                    { errors.password && <p className="mt-2 invisible peer-invalid:visible text-red-300 text-md">
                        Password should contain at least one character </p> }
                </>
                <button 
                    type="submit" 
                    className="w-full py-3 text-center text-lg text-white bg-amber-400 rounded-lg hover:bg-amber-300 active:bg-amber-500 outline-none"
                    disabled={!isValid}
                >   Sign In
                </button>
			</form>
			<p className="w-full text-center font-medium my-3">
				or 
			</p>
			<LoginButton />
		</div>
	)
}
