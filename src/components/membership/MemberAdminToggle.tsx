import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { IMemberUpdate, MemberProps } from "../../types/membership"
import { ErrorMessage, Loader } from "../UI/Messages"
import DialogModal from "../UI/DialogModal"


export default function MemberAdminToggle({ title, member }: MemberProps) {
    const { error: { toggleMemberAdminRoleError }, loading: { toggleMemberAdminRoleLoading }} = useTypedSelector((state) => state.membership)
    const { toggleMemberAdminRole } = useActions()

    const isAdmin = member.is_admin
    const updateForm: IMemberUpdate = {...member, is_admin: !isAdmin}

    const updateMember = () => {
        toggleMemberAdminRole(updateForm)
    }

    return (
        <>
            { toggleMemberAdminRoleLoading && <Loader /> }
            { toggleMemberAdminRoleError && <ErrorMessage error={ toggleMemberAdminRoleError.message } /> }

            <DialogModal
                buttonName={ isAdmin ? 'Unset Admin' : 'Set Admin' }
                title={`${title}`}
                message="We won't send you an email with all of the details."
            >
                <button
                    type="button"
                    className="inline-flex justify-center rounded-xl px-5 py-3 text-lg font-medium text-white bg-sky-300 hover:bg-sky-200 outline-none"
                    onClick={ updateMember }
                >
                    { title }
                </button>
            </DialogModal>
        </>
    )
}
