import { useEffect, useState } from "react"
import { AxiosError } from "axios"

import { userAPI } from "../api/userAPI"
import PageTitle from "./UI/PageTitle"
import Loader from "./UI/Loader"
import ErrorMessage from "./UI/ErrorMessage"
import UserMeUpdate from "./forms/UserMeUpdate"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { setUser } from "../store/reducers/userReducer"
import UserMeDelete from "./UserMeDelete"



export default function UserMe() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { currentUser, isAuth } = useTypedSelector((state) => state.user)
	const dispatch = useAppDispatch()

    async function fetchUserMe() {
        try {
            setError('')
            setLoading(true)
            const data = await userAPI.readUserMe()
            dispatch(setUser(data))
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchUserMe()
    }, [isAuth])


	return (
        <>
            <PageTitle title="My Profile"/>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

            <div className="flex flex-row bg-white">
                <div className="basis-1/4 gap-14 space-y-12 p-5 bg-gray-200">
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
                <div className="basis-1/4 bg-white">
                    <UserMeUpdate />
                </div>
                <div className="basis-1/4">
                    <UserMeDelete />
                </div>
                <div className="basis-1/4"></div>
            </div>
        </>
	)
}
