import { useEffect } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"
import { ErrorMessage, Loader } from "../UI/Messages"


export default function UserMe() {
    const { userMe, error: { fetchUserMeError }, loading: { fetchUserMeLoading }} = useTypedSelector((state) => state.user)
    const { fetchUserMe } = useActions()

    useEffect(() => {
        fetchUserMe()
    }, [])

    return (
        <>
            { fetchUserMeLoading && <Loader /> }
            { fetchUserMeError && <ErrorMessage error={ fetchUserMeError.message } /> }

            <div className="p-10 rounded-2xl bg-grey-200 space-y-8">
                <p className="mx-auto text-center font-medium tracking-wide cursor-pointer">
                    User Me
                </p>
                <div className="flex justify-between">
                    <span> Email </span>
                    <span>{ userMe.email }</span>
                </div>
                <div className="flex justify-between">
                    <span> Name </span> 
                    <span>{ userMe.name }</span>
                </div>  
                <div className="flex justify-between">
                    <span> Is Active </span>
                    <span>{ String(userMe.is_active) }</span>
                </div>
                <div className="flex justify-between">
                    <span> Is Superuser </span>
                    <span>{ String(userMe.is_superuser) }</span>
                </div>
                <div className="flex justify-between">
                    <span> ID </span>
                    <span>{ userMe.id }</span>
                </div>
            </div>
        </>
    )
}
