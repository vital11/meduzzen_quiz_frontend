import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import { IUser } from "../types/user"
import CompanyInviteCreate from "./membership/InviteCreate"
import PageTitle from "./UI/PageTitle"
import ButtonDropleft from "./UI/ButtonDropleft"
import { ErrorMessage, Loader } from "./UI/Messages"


const UserList: React.FC = () => {
    const { users, error: { fetchUsersError }, loading: { fetchUserLoading }} = useTypedSelector((state) => state.user)
    const { fetchUsers } = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            { fetchUserLoading && <Loader /> }
            { fetchUsersError && <ErrorMessage error={ fetchUsersError.message } /> }

            <PageTitle title="Users List"/>
            <div className="w-full relative" >
                <div className="grid grid-cols-6 gap-4 p-2 font-medium bg-gray-200">
                    <span className="p-4">ID</span>
                    <span className="p-4">Email</span>
                    <span className="p-4">Name</span>
                    <span className="p-4">Is Active</span>
                    <span className="p-4">Is Superuser</span>
                    <span className="p-4"></span>
                    <span className="p-4 absolute right-0"></span>
                </div>
                { users.map((user: IUser) => (
                    <div
                        key={user.id} 
                        className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
                    >   
                        <span className="p-4">{ user.id }</span>
                        <span className="p-4 text-amber-400">
                            <Link to={`/users/${user.id}`}>{ user.email }</Link>
                        </span>
                        <span className="p-4">{ user.name }</span>
                        <span className="p-4">{ String(user.is_active) }</span>
                        <span className="p-4">{ String(user.is_superuser) }</span>
                        <span className="px-5 absolute right-2">
                            <ButtonDropleft title="Invite">
                                <CompanyInviteCreate id={`${user.id}`} />
                            </ButtonDropleft>
                        </span>
                    </div>
                )) }
            </div>
        </>
    )
}

export default UserList

