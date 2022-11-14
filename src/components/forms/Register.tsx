import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AxiosError } from "axios"

import { IUser, IUserCreate } from "../../types/user"
import { userAPI } from "../../api/userAPI"
import LoginButton from "../UI/LoginButton"
import Modal from "../UI/Modal"


export default function Register() {
    const [registerForm, setRegisterForm] = useState<IUserCreate>()
    const [user, setUser] = useState<IUser>()
    const [modal, setModal] = useState(false)
	const navigate = useNavigate()

    const changeFormHandler = (label: string, event: React.ChangeEvent<HTMLInputElement>) => {
		switch (label) {
			case "email":
                const email_validation = /\S+@\S+\.\S+/;
                if (email_validation.test(event.target.value)) {
                    setRegisterForm({ ...registerForm, email: event.target.value })
                }
				break
			case "password":
				setRegisterForm({ ...registerForm, password: event.target.value })
				break
		}
	}

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const data = await userAPI.createUser(registerForm)
            setUser(data)
            setModal(true)
            setTimeout(() => {
                navigate('/login')
            }, 3000)
        } catch (e: unknown) {
            const error = e as AxiosError
            console.log(error.message)
        }
    }

    return (
        <>
            {modal && <Modal title="" onClose={() => setModal(false)}>
                <p> Account with Email <span style={{ fontWeight: 'bold'}}> {user?.email} </span> created successfully.</p>
                <p> Login to Your Account</p>
            </Modal>}
        
            <div className="w-[600px] p-10 rounded-xl bg-white absolute top-30 left-1/2 -translate-x-1/2">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                        Welcome to Quiz
                    </h1>
                    <p className="w-80 text-center mb-8 font-medium tracking-wide cursor-pointer mx-auto">
                        Create a Quiz Account
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
                    >	Sign Up
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


