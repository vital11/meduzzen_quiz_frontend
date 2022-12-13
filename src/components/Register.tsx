import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { ErrorMessage, Loader } from './UI/Messages'
import LoginButton from './UI/LoginButton'


export default function Register() {
    const { register, watch, getValues, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' })
    const { user, error: { addUserError }, loading: { addUserLoading } } = useTypedSelector((state) => state.user)
    const { addUser } = useActions()
    const navigate = useNavigate()

	useEffect(() => {
		user.email && navigate('/login')
	}, [user])

    const onSubmit = handleSubmit(( data ) => {
        addUser({ email: data.email, password: data.password })
    })

    return (
        <>
            { addUserLoading && <Loader /> }
            { addUserError && <ErrorMessage error={ addUserError.message } /> }

            <div className="w-[600px] p-10 rounded-xl bg-white absolute top-30 left-1/2 -translate-x-1/2 ">
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                    Welcome to Quiz
                </h1>
                <p className="w-80 text-center mb-8 font-medium tracking-wide cursor-pointer mx-auto">
                    Create a Quiz Account
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
                        { errors.email && <p className="mt-2 invisible peer-invalid:visible text-red-300"> Enter valid email address </p> }
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
                        { errors.password && <p className="mt-2 invisible peer-invalid:visible text-red-300"> Password should contain at least one character </p> }
                    </>
                    <>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="peer block text-md py-3 px-5 rounded-lg w-full border outline-none ocus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                            {...register("password_repeat", {
                                required: true,
                            })}
                        />
                        { watch("password_repeat") !== watch("password") && getValues("password_repeat") ? (
                            <p className="mt-2 invisible peer-invalid:visible text-red-300"> Password not match </p>
                            ) : null }
                    </>
                    <button 
                        type="submit" 
                        className="w-full py-3 text-center text-lg text-white bg-amber-400 rounded-lg hover:bg-amber-300 active:bg-amber-500 outline-none"
                        disabled={!isValid}
                    >   Sign Up
                    </button>
                </form>
                <p className="w-full text-center font-medium my-3">
                    or 
                </p>
                <LoginButton />
            </div>
        </>
	)
}
