import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { userAPI } from "../api/userAPI"
import { IUser } from "../types/user"
import Modal from "../components/UI/Modal"
import { AxiosError } from "axios"


interface Params {
    id: string;
}   

const UserDelete = () => {
    const {id} = useParams<keyof Params>() as Params
    const [user, setUser] = useState<IUser>()
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    async function clickHandler(id: string) {
        try {
            const data = await userAPI.deleteUser(id)
            setUser(data)
            setModal(true)
            setTimeout(() => {
                navigate('/users')
            }, 2000)
        } catch (e) {
            const error = e as AxiosError
            console.log(error)
        }
    }

    return (
        <>
            {modal && <Modal title="" onClose={() => setModal(false)}>
                <p> User with Email <span style={{ fontWeight: 'bold'}}> {user?.email} </span> deleted successfully</p>
            </Modal>}

            <div className="w-[600px] m-5 p-10 rounded-xl bg-white">
                <p className="w-80 text-center font-medium tracking-wide cursor-pointer mx-auto mb-8">
                    Delete Your Account
                </p>
                <button
                    type="submit"
                    className="w-full py-3 text-center text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                    onClick={() => clickHandler(id)}
                >   Delete
                </button>
            </div>
        </>
    );
}

export default UserDelete




