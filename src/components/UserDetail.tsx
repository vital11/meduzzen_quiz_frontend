import { useTypedSelector } from "../hooks/useTypedSelector"
import PageTitle from "./UI/PageTitle"
import User from "./users/User"
import UserUpdate from "./users/UserUpdate"
import UserDelete from "./users/UserDelete"


export default function UserDetail() {
    const { currentUser } = useTypedSelector((state) => state.user)

    return (
        <>
            <PageTitle title="User Detail"/>
            <div className="flex flex-row bg-white">
                <div className="basis-1/4 gap-14 space-y-5 p-5 bg-gray-200">
                    <User />
                    { currentUser.is_superuser &&
                    <>
                        <UserUpdate />
                        <UserDelete />
                    </> }
                </div>
                <div className="basis-3/4 bg-white"></div>
            </div>
        </>
	)
}
