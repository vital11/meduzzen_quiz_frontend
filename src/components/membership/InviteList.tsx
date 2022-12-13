import { useEffect } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"
import { ErrorMessage, Loader } from "../UI/Messages"
import { MembershipListProps } from "../../types/membership"
import MembershipDelete from "./MembershipDelete"
import MembershipAccept from "./MembershipAccept"


export default function InviteList({ title, company_id }: MembershipListProps) {
    const { invites, error: { fetchInvitesError }, loading: { fetchInvitesLoading }} = useTypedSelector((state) => state.membership)
    const { fetchInvites } = useActions()

    useEffect(() => {
        fetchInvites(company_id)
    }, [])

	const currentInvites = invites.map((invite) => {
		if (company_id && company_id !== invite.company_id) {
			return null
		} else {
			return (
				<div
					key={ invite.membership_id }
					className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
				>
					<span className="p-4">{ invite.membership_id }</span>
					<span className="p-4">{ invite.user_id }</span>
					<span className="p-4">{ invite.company_id }</span>
					<span className="p-4">{ invite.membership_type }</span>
					<span className="col-span-2 flex justify-end gap-5 px-5">
						{ !company_id && <MembershipAccept membership={ invite } />}
						<MembershipDelete membership={ invite } />
					</span>
				</div>
			)
		}
	})

    return (
        <>
            { fetchInvitesLoading && <Loader /> }
            { fetchInvitesError && <ErrorMessage error={ fetchInvitesError.message} /> }

            <div className="flex items-center w-full h-16 px-5 pb-2 font-medium tracking-wide bg-gray-100">{ title }</div>
            <div className="w-full relative">
                <>
                    <div className="grid grid-cols-6 gap-4 p-2 font-medium bg-gray-200">
                        <span className="p-4">ID</span>
                        <span className="p-4">User ID</span>
                        <span className="p-4">Company ID</span>
                        <span className="p-4">Membership Type</span>
                        <span className="p-4 col-span-2 flex justify-end"></span>
                    </div>
                    { currentInvites }
                </>
            </div>
        </>
    )
}

