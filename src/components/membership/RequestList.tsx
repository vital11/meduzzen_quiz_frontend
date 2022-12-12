import { useEffect } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"
import { ErrorMessage, Loader } from "../UI/Messages"
import { MembershipListProps } from "../../types/membership"
import MembershipDelete from "./MembershipDelete"
import MembershipAccept from "./MembershipAccept"


export default function RequestList({ title, company_id }: MembershipListProps) {
    const { requests, error: { fetchRequestsError }, loading: { fetchRequestsLoading }} = useTypedSelector((state) => state.membership)
    const { fetchRequests } = useActions()

    useEffect(() => {
        fetchRequests(company_id)
    }, [])

	const currentRequests = requests.map((request) => {
		if (company_id && company_id !== request.company_id) {
			return null
		} else {
			return (
				<div
					key={ request.membership_id }
					className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
				>
					<span className="p-4">{ request.membership_id }</span>
					<span className="p-4">{ request.user_id }</span>
					<span className="p-4">{ request.company_id }</span>
					<span className="p-4">{ request.membership_type }</span>
					<span className="col-span-2 flex justify-end gap-5 px-5">
						{ company_id && <MembershipAccept membership={ request } /> }
						<MembershipDelete membership={ request } />
					</span>
				</div>
			)
		}
	})

    return (
        <>
            { fetchRequestsLoading && <Loader /> }
            { fetchRequestsError && <ErrorMessage error={ fetchRequestsError.message} /> }

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
                    { currentRequests }
                </>
            </div>
        </>
    )
}
