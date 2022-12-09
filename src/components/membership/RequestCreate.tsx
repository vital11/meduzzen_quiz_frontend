import { useTypedSelector } from "../../hooks/useTypedSelector"
import { MembershipTypes } from "../../types/membership"
import { useActions } from "../../hooks/useActions"
import { ErrorMessage, Loader } from "../UI/Messages"


interface RequestCreateProps { id: string }

export default function RequestCreate({ id }: RequestCreateProps) {
    const { currentUser } = useTypedSelector((state) => state.auth)
    const { error: { addRequestError }, loading: { addRequestLoading }} = useTypedSelector((state) => state.membership)
    const { addRequest } = useActions()

    const handleClick = () => {
        addRequest({
            user_id: currentUser.id,
            company_id: Number(id),
            membership_type: MembershipTypes.REQUEST
        })
    }

    return (
        <>
            { addRequestLoading && <Loader /> }
            { addRequestError && <ErrorMessage error={ addRequestError.message} /> }

            <button
                type="submit" 
                className="px-5 py-3 rounded-xl text-lg font-medium text-white bg-gray-200 hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                onClick={ handleClick }
            >   Join
            </button>
        </>
	)
}
