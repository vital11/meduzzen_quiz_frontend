import { useState } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { ICompanyMembership, MembershipTypes } from "../types/companies"
import CompaniesMeMember from "./companies/CompaniesMeMember"
import CompaniesMeOwner from "./companies/CompaniesMeOwner"
import CompanyCreate from "./companies/CompanyCreate"
import CompanyMembershipList from "./companies/CompanyMembershipList"


import PageTitle from "./UI/PageTitle"
import UserMe from "./users/UserMe"
import UserMeDelete from "./users/UserMeDelete"
import UserMeUpdate from "./users/UserMeUpdate"


export default function Dashboard() {
    const { currentUser, isAuth } = useTypedSelector((state) => state.user)

    const userInvitesParams: ICompanyMembership = {
        membership_type: MembershipTypes.INVITE,
    }

    const userRequestParams: ICompanyMembership = {
        membership_type: MembershipTypes.REQUEST,
    }

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
                    <CompaniesMeOwner />
                    <CompanyMembershipList title="User Me Invites" params={ userInvitesParams } />
                    <CompanyMembershipList title="User Me Requests" params={ userRequestParams } />
                </div>
            </div>
        </>
	)
}
