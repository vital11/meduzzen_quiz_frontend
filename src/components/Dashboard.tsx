import { useTypedSelector } from "../hooks/useTypedSelector"
import OwnerCompanies from "./companies/OwnerCompanies"
import CompanyCreate from "./companies/CompanyCreate"
import InviteList from "./membership/InviteList"
import MemberList from "./membership/MemberList"
import RequestList from "./membership/RequestList"
import PageTitle from "./UI/PageTitle"
import UserMe from "./users/UserMe"
import UserMeDelete from "./users/UserMeDelete"
import UserMeUpdate from "./users/UserMeUpdate"


export default function Dashboard() {
    const { currentUser } = useTypedSelector((state) => state.auth)

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
                <div className="basis-3/4 bg-white">
                    <OwnerCompanies />

                    <MemberList title='Member Companies' user_id={ currentUser.id }/>

                    <InviteList title='My Invites' />
                    <RequestList title='My Requests' />
                </div>
            </div>
        </>
	)
}
