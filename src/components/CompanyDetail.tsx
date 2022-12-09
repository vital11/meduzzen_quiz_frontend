import { useParams } from "react-router-dom"
import PageTitle from "./UI/PageTitle"
import Company from "./companies/Company"
import CompanyUpdate from "./companies/CompanyUpdate"
import CompanyDelete from "./companies/CompanyDelete"
import MembershipList from "./membership/InviteList"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MembershipParams, MembershipTypes } from "../types/membership"
import { ErrorMessage } from "./UI/Messages"


interface Params { id: string }  

export default function CompanyDetail() {
    const { id } = useParams<keyof Params>() as Params
    const company_id = Number(id)
    const { currentUser } = useTypedSelector((state) => state.auth)
    const { company } = useTypedSelector((state) => state.company)

    const companyInvites: MembershipParams = {
        membership_type: MembershipTypes.INVITE,
        company_id: company_id
    }

    const companyRequests: MembershipParams = {
        membership_type: MembershipTypes.REQUEST,
        company_id: company_id
    }

    return (
        <>
            <PageTitle title="Company Detail"/>

            { company.is_private && currentUser.id !== company.owner_id
            ? <ErrorMessage error="This is a Private company" />
            : <div className="flex flex-row bg-white">
                <div className="basis-1/4 max-w-[25%] gap-14 space-y-5 p-5 bg-gray-200">
                    <Company id={ company_id }/>
                    { currentUser.id === company.owner_id && 
                    <>
                        <CompanyUpdate id={ company_id }/>
                        <CompanyDelete id={ company_id }/>
                    </> }
                </div>
                <div className="basis-3/4 bg-white">
                    { currentUser.id === company.owner_id && 
                    <>
                        <MembershipList title="Company Invites" params={ companyInvites }/>
                        <MembershipList title="Company Requests" params={ companyRequests }/>
                    </> }
                </div>
            </div> }
        </>
	)
}
