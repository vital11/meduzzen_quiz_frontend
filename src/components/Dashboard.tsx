import { useState } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import CompanyCreate from "./companies/CompanyCreate"
import Modal from "./UI/Modal"
import PageTitle from "./UI/PageTitle"
import UserMe from "./users/UserMe"
import UserMeDelete from "./users/UserMeDelete"
import UserMeUpdate from "./users/UserMeUpdate"


export default function Dashboard() {
    const { currentUser, isAuth } = useTypedSelector((state) => state.user)
    const [modal, setModal] = useState(false)

	return (
        <>
            <PageTitle title="Dashboard"/>
            
            <div className="flex flex-row bg-white">
                <div className="basis-1/4 gap-14 space-y-5 p-5 bg-gray-200">
                    <UserMe />
                    <UserMeUpdate />
                    <UserMeDelete />
                    <CompanyCreate />
                </div>
                <div className="basis-1/4 bg-white"></div>
                <div className="basis-1/4"></div>
                <div className="basis-1/4"></div>
            </div>
        </>
	)
}
