import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userAPI } from "../api/userAPI";
import { IUser } from "../types/user";
import PageTitle from "./UI/PageTitle";
import UserDelete from "./UserDelete";
import UserUpdate from "./forms/UserUpdate";


interface Params {
    id: string;
}

export default function UserMe() {
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        userAPI.readUserMe(setUser)
    }, [])

	return (
        <>
        <PageTitle title="User Profile"/>

        <div className="flex flex-row bg-white">
            <div className="basis-1/8 gap-14 bg-gray-200 p-3">
                <div className="p-4">Email</div>
                <div className="p-4">Name</div>
                <div className="p-4">Is Active</div>
                <div className="p-4">Is Superuser</div>
                <div className="p-4">ID</div>
            </div>
            <div className="basis-1/4 gap-4 bg-gray-200 p-3">
                <div className="p-4">{user?.email}</div>
                <div className="p-4">{user?.name}</div>
                <div className="p-4">{String(user?.is_active)}</div>
                <div className="p-4">{String(user?.is_superuser)}</div>
                <div className="p-4">{user?.id}</div>
            </div>
            <div className="basis-1/4 bg-white">
                <UserUpdate />
            </div>
            <div className="basis-1/4">
                <UserDelete />
            </div>
        </div>
        </>
	);
}
