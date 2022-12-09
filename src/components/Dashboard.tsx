import { MembershipTypes, MembershipParams } from "../types/membership"
import CompaniesMeOwner from "./companies/CompaniesMeOwner"
import CompanyCreate from "./companies/CompanyCreate"
import MembershipList from "./membership/InviteList"
import PageTitle from "./UI/PageTitle"
import UserList from "./UserList"
import UserMe from "./users/UserMe"
import UserMeDelete from "./users/UserMeDelete"
import UserMeUpdate from "./users/UserMeUpdate"


export default function Dashboard() {

    const userInvites: MembershipParams = {
        membership_type: MembershipTypes.INVITE,
    }

    const userRequests: MembershipParams = {
        membership_type: MembershipTypes.REQUEST,
    }

	return (
        <>
            <PageTitle title="Dashboard"/>

            <UserList />
            
            <div className="flex flex-row bg-white">
                <div className="basis-1/4 gap-14 space-y-5 p-5 bg-gray-200">
                    <UserMe />
                    <UserMeUpdate />
                    <UserMeDelete />
                    <CompanyCreate />
                </div>
                <div className="basis-3/4 bg-white">
                    <CompaniesMeOwner />
                    <MembershipList title="Company Invites" params={ userInvites } />
                    <MembershipList title="Company Requests" params={ userRequests } />
                </div>
            </div>
        </>
	)
}
