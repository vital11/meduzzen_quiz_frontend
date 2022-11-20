import { useEffect, useState } from "react"
import { AxiosError } from "axios"
import { useParams } from "react-router-dom"

import { userAPI } from "../../api/userAPI"
import { IUser } from "../../types/user"
import { ErrorMessage, Loader } from "../UI/Messages"


interface Params {
    id: string;
}

export default function User() {
    const {id} = useParams<keyof Params>() as Params
    const [user, setUser] = useState<IUser>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchUser()
    }, [])

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

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

            <div className="p-10 rounded-2xl bg-grey-200 space-y-8">
                <p className="mx-auto text-center font-medium tracking-wide cursor-pointer">
                    Personal Info
                </p>
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
        </>
    )
}






