import { useEffect } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ErrorMessage, Loader } from "../UI/Messages"
import { MemberListProps } from "../../types/membership"


export default function MemberList({ title, company_id, user_id }: MemberListProps) {
    const { members, error: { fetchMembersError }, loading: { fetchMembersLoading }} = useTypedSelector((state) => state.membership)
    const { fetchCompanyMembers, fetchMemberCompanies } = useActions()

    useEffect(() => {
        company_id && fetchCompanyMembers(company_id)
        user_id && fetchMemberCompanies(user_id)
    }, [])


	const currentMembers = members.map((member) => {
		if (company_id && company_id !== member.company_id) {
			return null
		} else {
			return (
                <div 
                    key={ member.m_id } 
                    className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
                >   
                    <span className="p-4">{ member.m_id }</span>
                    <span className="p-4">{ member.user_id }</span>
                    <span className="p-4">{ member.company_id }</span>
                    <span className="p-4">{ String(member.is_admin) }</span>
                    <span className="p-4">{ company_id ? member.email : member.comp_name }</span>
                    <span className="flex justify-end px-5">
                        <button>Delete Company / Member</button>
                    </span>
            </div>
			)
		}
	})

    return (
        <>
            { fetchMembersLoading && <Loader /> }
            { fetchMembersError && <ErrorMessage error={ fetchMembersError.message } /> }

            <div className="flex items-center w-full h-16 px-5 pb-2 font-medium tracking-wide bg-gray-100"> { title } </div>

            <div className="w-full relative">
                <>
                    <div className="grid grid-cols-6 gap-4 p-2 font-medium bg-gray-200">
                        <span className="p-4">ID</span>
                        <span className="p-4">User ID</span>
                        <span className="p-4">Company ID</span>
                        <span className="p-4">Is Admin</span>
                        <span className="p-4">{ company_id ? 'Member Email' : 'Company Name' }</span>
                        <span className="p-4 flex justify-end"></span>
                    </div>
                    { currentMembers }
                </>
            </div>
        </>
    )
}

