import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'

import { IUser } from "../types/user"
import { userAPI } from '../api/userAPI'
import { ErrorMessage, Loader } from './UI/Messages'
import LoginButton from './UI/LoginButton'
import Modal from './UI/Modal'


export default function Register() {
    const { register, watch, getValues, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' })
    const [user, setUser] = useState<IUser>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    const onSubmit = handleSubmit(( data ) => {
        (async () => {
            try {
                setError('')
                setLoading(true)
                const user = await userAPI.createUser({ email: data.email, password: data.password })
                setUser(user)
                setModal(true)
                setTimeout(() => {
                    navigate('/login')
                }, 3000)
                setLoading(false)
            } catch (e: unknown) {
                const error = e as AxiosError
                setLoading(false)
                setError(error.message)
            }
        })()
    })

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

            {modal && <Modal title="" onClose={() => setModal(false)}>
                <p> Account with Email <span style={{ fontWeight: 'bold'}}> {user?.email} </span> created successfully.</p>
                <p> Login to Your Account</p>
            </Modal>}

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


