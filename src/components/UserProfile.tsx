import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AxiosError } from "axios"

import { userAPI } from "../api/userAPI"
import { IUser } from "../types/user"
import PageTitle from "./UI/PageTitle"
import ErrorMessage from "./UI/ErrorMessage"
import Loader from "./UI/Loader"
import UserDelete from "./UserDelete"
import UserUpdate from "./forms/UserUpdate"
import { useTypedSelector } from "../hooks/useTypedSelector"


interface Params {
    id: string;
}

export default function UserProfile() {
    const {id} = useParams<keyof Params>() as Params
    const [user, setUser] = useState<IUser>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { currentUser } = useTypedSelector((state) => state.user)

    async function fetchUser() {
        try {
            setError('')
            setLoading(true)
            const data = await userAPI.readUser(id)
            setUser(data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
            <PageTitle title="User Profile"/>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

            <div className="flex flex-row bg-white">
                <div className="basis-1/4 gap-14 space-y-12 p-5 bg-gray-200">
                    <div className="flex justify-between">
                        <span> Email </span>
                        <span>{ user?.email }</span>
                    </div>
                    <div className="flex justify-between">
                        <span> Name </span> 
                        <span>{ user?.name }</span>
                    </div>  
                    <div className="flex justify-between">
                        <span> Is Active </span>
                        <span>{ String( user?.is_active) }</span>
                    </div>
                    <div className="flex justify-between">
                        <span> Is Superuser </span>
                        <span>{ String( user?.is_superuser) }</span>
                    </div>
                    <div className="flex justify-between">
                        <span> ID </span>
                        <span>{ user?.id }</span>
                    </div>
                </div>
                <div className="basis-1/4 bg-white">
                    { currentUser.is_superuser && <UserUpdate />}
                </div>
                <div className="basis-1/4">
                    { currentUser.is_superuser && <UserDelete /> }
                </div>
                <div className="basis-1/4"></div>
            </div>
        </>
	)
}
