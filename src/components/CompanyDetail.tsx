import { useParams } from "react-router-dom"
import PageTitle from "./UI/PageTitle"
import Company from "./companies/Company"
import CompanyUpdate from "./companies/CompanyUpdate"
import CompanyDelete from "./companies/CompanyDelete"
import InviteList from "./membership/InviteList"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { MembershipTypes } from "../types/membership"
import { ErrorMessage } from "./UI/Messages"
import RequestList from "./membership/RequestList"
import MemberList from "./membership/MemberList"



interface Params { id: string }  

export default function CompanyDetail() {
    const { id } = useParams<keyof Params>() as Params
    const company_id = Number(id)
    const { currentUser } = useTypedSelector((state) => state.auth)
    const { company } = useTypedSelector((state) => state.company)

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
                    <MemberList title='Company Members' company_id={ company_id }/>
                    { currentUser.id === company.owner_id && 
                    <>
                        <InviteList title='Company Invites' company_id={ company_id }/>
                        <RequestList title='Company Requests' company_id={ company_id }/>
                    </> }
                </div>
            </div> }
        </>
	)
}
