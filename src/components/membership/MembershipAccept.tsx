import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { MembershipProps, MembershipTypes } from "../../types/membership"
import { ErrorMessage, Loader } from "../UI/Messages"
import DialogModal from "../UI/DialogModal"


export default function MembershipAccept({ membership }: MembershipProps) {
    const { error: { addMemberError }, loading: { addMemberLoading }} = useTypedSelector((state) => state.membership)
    const { addMember } = useActions()

    const title = membership.membership_type === MembershipTypes.INVITE ? 'Accept Invite' : 'Accept Request'

    const acceptMembership = () => {
        addMember(membership)
    }

    return (
        <>
            { addMemberLoading && <Loader /> }
            { addMemberError && <ErrorMessage error={ addMemberError.message } /> }

            <DialogModal
                buttonName='Accept...'
                title={`${title}`}
                message="We won't send you an email with all of the details."
            >
                <button
                    type="button"
                    className="inline-flex justify-center rounded-xl px-5 py-3 text-lg font-medium text-white bg-sky-300 hover:bg-sky-200 outline-none"
                    onClick={ acceptMembership }
                >
                    { title }
                </button>
            </DialogModal>
        </>
    )
}
