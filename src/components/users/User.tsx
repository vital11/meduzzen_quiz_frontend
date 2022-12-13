import { useEffect } from "react"
import { UserProps } from "../../types/user"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ErrorMessage, Loader } from "../UI/Messages"


export default function User({ id }: UserProps) {
    const { user, error: { fetchUserError }, loading: { fetchUserLoading } } = useTypedSelector((state) => state.user)
    const { fetchUser } = useActions()

    useEffect(() => {
        fetchUser(id)
    }, [])

    return (
        <>
            { fetchUserLoading && <Loader /> }
            { fetchUserError && <ErrorMessage error={ fetchUserError.message } /> }

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
