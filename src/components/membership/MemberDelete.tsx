import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { MemberProps } from "../../types/membership"
import { ErrorMessage, Loader } from "../UI/Messages"
import DialogModal from "../UI/DialogModal"


export default function MemberDelete({ title, member }: MemberProps) {
    const { error: { removeMemberError }, loading: { removeMemberLoading }} = useTypedSelector((state) => state.membership)
    const { removeMember } = useActions()

    const handleClick = () => {
        removeMember(member)
    }

    return (
        <>
            { removeMemberLoading && <Loader /> }
            { removeMemberError && <ErrorMessage error={ removeMemberError.message } /> }

            <DialogModal
                buttonName='Delete'
                title={`${title}`}
                message="We won't send you an email with all of the details."
            >
                <button
                    type="button"
                    className="inline-flex justify-center rounded-xl px-5 py-3 text-lg font-medium text-white bg-sky-300 hover:bg-sky-200 outline-none"
                    onClick={ handleClick }
                >
                    { title }
                </button>
            </DialogModal>
        </>
    )
}
