import { useEffect, useState } from "react"
import { AxiosError } from "axios"

import { userAPI } from "../../api/userAPI"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setUserAC } from "../../store/reducers/userReducer"
import { ErrorMessage, Loader } from "../UI/Messages"


export default function UserMe() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { currentUser, isAuth } = useTypedSelector((state) => state.user)
	const dispatch = useAppDispatch()

    useEffect(() => {
        fetchUserMe()
    }, [isAuth])

    async function fetchUserMe() {
        try {
            setError('')
            setLoading(true)
            const data = await userAPI.readUserMe()
            dispatch(setUserAC(data))
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

            <div className="p-10 rounded-2xl bg-grey-200 space-y-8">
                <p className="mx-auto text-center font-medium tracking-wide cursor-pointer">
                    User Me
                </p>
                <div className="flex justify-between">
                    <span> Email </span>
                    <span>{ currentUser?.email }</span>
                </div>
                <div className="flex justify-between">
                    <span> Name </span> 
                    <span>{currentUser?.name }</span>
                </div>  
                <div className="flex justify-between">
                    <span> Is Active </span>
                    <span>{ String(currentUser?.is_active) }</span>
                </div>
                <div className="flex justify-between">
                    <span> Is Superuser </span>
                    <span>{ String(currentUser?.is_superuser) }</span>
                </div>
                <div className="flex justify-between">
                    <span> ID </span>
                    <span>{ currentUser?.id }</span>
                </div>
            </div>
        </>
    )
}






