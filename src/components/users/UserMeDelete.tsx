import { useAuth0 } from "@auth0/auth0-react"
import { useState } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ErrorMessage, Loader } from "../UI/Messages"
import Modal from "../UI/Modal"


export default function UserMeDelete() {
    const { userMe, error: { removeUserMeError }, loading: { removeUserMeLoading } } = useTypedSelector((state) => state.user)
    const { removeUserMe, logout } = useActions()
    const { logout: logoutAuth0 } = useAuth0()
    const [modal, setModal] = useState(false)

    const handleClick = () => {
        removeUserMe()
        setModal(true)
        setTimeout(() => {
            logout()
            logoutAuth0({ returnTo: window.location.origin })
        }, 3000)
    }

    return (
        <>
            { removeUserMeLoading && <Loader /> }
            { removeUserMeError && <ErrorMessage error={ removeUserMeError.message } /> }

            { modal && !removeUserMeLoading && !removeUserMeError &&
            <Modal title="" onClose={() => setModal(false)}>
                <p> Account Email <span style={{ fontWeight: 'bold'}}> {userMe.email} </span> deleted successfully</p>
            </Modal> }

            <div className="p-10 rounded-2xl bg-white">
                <p className="text-center font-medium tracking-wide cursor-pointer mx-auto mb-8">
                    Delete Account
                </p>
                <button
                    type="submit"
                    className="w-full py-3 text-center text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                    onClick={ handleClick }
                >   Delete
                </button>
            </div>
        </>
    )
}
