import { useParams } from "react-router-dom"
import { useTypedSelector } from "../hooks/useTypedSelector"
import PageTitle from "./UI/PageTitle"
import Company from "./companies/Company"
import CompanyUpdate from "./companies/CompanyUpdate"
import CompanyDelete from "./companies/CompanyDelete"
import InviteList from "./membership/InviteList"
import RequestList from "./membership/RequestList"
import MemberList from "./membership/MemberList"
import { ErrorMessage } from "./UI/Messages"
import QuizCreate from "./quiz/QuizCreate"
import QuizList from "./quiz/QuizList"
import { MemberRoles } from "../types/membership"


interface Params { id: string }  

export default function CompanyDetail() {
    const { id } = useParams<keyof Params>() as Params
    const company_id = Number(id)
    const { company } = useTypedSelector((state) => state.company)
    const { members } = useTypedSelector((state) => state.membership)
    const { currentUser } = useTypedSelector((state) => state.auth)

    const isOwner = currentUser.id === company.owner_id
    const isMember = isOwner || members.some(member => member.user_id === currentUser.id)
    const isAdmin = isOwner || members.some(member => member.user_id === currentUser.id && member.role === MemberRoles.ADMIN)

    return (
        <>
            <PageTitle title="Company Detail"/>

            {  company.is_private && !isMember && <ErrorMessage error="This is a Private company" /> }

            <div className="flex flex-row bg-white">

                <div className="basis-1/4 max-w-[25%] gap-14 space-y-5 p-5 bg-gray-200">
                    <Company id={ company_id }/>
                    { isOwner && <>
                        <CompanyUpdate id={ company_id }/>
                        <CompanyDelete id={ company_id }/> </> }
                    { isAdmin && 
                        <QuizCreate companyId={ company_id } /> }
                </div>

                <div className="basis-3/4 bg-white">
                    <MemberList title='Company Members' company_id={ company_id } company={ company } />
                    { isOwner && <>
                        <InviteList title='Company Invites' company_id={ company_id }/>
                        <RequestList title='Company Requests' company_id={ company_id }/> </> }
                    <QuizList title='Company Quizzes' companyId={ company_id } />
                </div>

            </div>
        </>
	)
}
