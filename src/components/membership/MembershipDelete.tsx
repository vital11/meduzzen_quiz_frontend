import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { MembershipProps, MembershipTypes } from "../../types/membership"
import { ErrorMessage, Loader } from "../UI/Messages"
import DialogModal from "../UI/DialogModal"


export default function MembershipDelete({ membership }: MembershipProps) {
    const { error: { removeInviteError, removeRequestError },
            loading: { removeInviteLoading, removeRequestLoading }
        } = useTypedSelector((state) => state.membership)

    const { removeInvite, removeRequest } = useActions()

    const isInvite = membership.membership_type === MembershipTypes.INVITE
    const title = isInvite ? 'Delete Invite' : 'Delete Request'

    const deleteMembership = () => {
        isInvite
        ? removeInvite(membership)
        : removeRequest(membership)
    }

    return (
        <>
            { (removeInviteLoading || removeRequestLoading) && <Loader /> }
            { removeInviteError && <ErrorMessage error={ removeInviteError.message } /> }
            { removeRequestError && <ErrorMessage error={ removeRequestError.message } /> }

            <DialogModal
                buttonName='Delete...'
                title={`${title}`}
                message="We won't send you an email with all of the details."
            >
                <button
                    type="button"
                    className="inline-flex justify-center rounded-xl px-5 py-3 text-lg font-medium text-white bg-sky-300 hover:bg-sky-200 outline-none"
                    onClick={ deleteMembership }
                >
                    { title }
                </button>
            </DialogModal>
        </>
    )
}
