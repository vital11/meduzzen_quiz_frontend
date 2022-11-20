import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { AxiosError } from "axios"

import { userAPI } from "../../api/userAPI"
import { IUser } from "../../types/user"
import { ErrorMessage, Loader } from "../UI/Messages"
import Modal from "../UI/Modal"


interface Params {
    id: string;
}   

export default function UserDelete() {
    const {id} = useParams<keyof Params>() as Params
    const [user, setUser] = useState<IUser>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    
    async function clickHandler(id: string) {
        try {
            setError('')
            setLoading(true)
            const data = await userAPI.deleteUser(id)
            setUser(data)
            setLoading(false)
            setModal(true)
            setTimeout(() => {
                navigate('/users')
            }, 2000)
        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }
            
            { modal && 
            <Modal title="" onClose={() => setModal(false)}>
                <p> Account Email <span style={{ fontWeight: 'bold'}}> {user?.email} </span> deleted successfully</p>
            </Modal> }

            <div className="p-10 rounded-2xl bg-white">
                <p className="text-center font-medium tracking-wide cursor-pointer mx-auto mb-8">
                    Delete Account
                </p>
                <button
                    type="submit"
                    className="w-full py-3 text-center text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                    onClick={() => clickHandler(id)}
                >   Delete
                </button>
            </div>
        </>
    )
}






