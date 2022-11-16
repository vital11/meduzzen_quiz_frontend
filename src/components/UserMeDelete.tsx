import { useAuth0 } from "@auth0/auth0-react"
import { useState } from "react"
import { AxiosError } from "axios"

import { userAPI } from "../api/userAPI"
import { IUser } from "../types/user"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { logoutUser } from "../store/reducers/userReducer"
import Modal from "../components/UI/Modal"


export default function UserMeDelete() {
    const { logout } = useAuth0();
    const dispatch = useAppDispatch()
    const [user, setUser] = useState<IUser>()
    const [modal, setModal] = useState(false)

    async function clickHandler() {
        try {
            const data = await userAPI.deleteUserMe()
            setUser(data)
            setModal(true)
            setTimeout(() => {
                dispatch(logoutUser())
                logout({ returnTo: window.location.origin })
            }, 3000)
        } catch (e) {
            const error = e as AxiosError
            console.log(error)
        }
    }

    return (
        <>
            { modal && 
            <Modal title="" onClose={() => setModal(false)}>
                <p> Your Account Email <span style={{ fontWeight: 'bold'}}> {user?.email} </span> deleted successfully</p>
            </Modal> }

            <div className="w-[600px] m-5 p-10 rounded-xl bg-white">
                <p className="w-80 text-center font-medium tracking-wide cursor-pointer mx-auto mb-8">
                    Delete Your Account
                </p>
                <button
                    type="submit"
                    className="w-full py-3 text-center text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                    onClick={() => clickHandler()}
                >   Delete
                </button>
            </div>
        </>
    )
}






