import { useParams } from "react-router-dom"
import PageTitle from "./UI/PageTitle"
import User from "./users/User"


interface Params { id: string }  

export default function UserDetail() {
    const { id } = useParams<keyof Params>() as Params
    const user_id = Number(id)

    return (
        <>
            <PageTitle title="User Detail"/>
            <div className="flex flex-row bg-white">
                <div className="basis-1/4 gap-14 space-y-5 p-5 bg-gray-200">
                    <User id={ user_id } />
                </div>
                <div className="basis-3/4 bg-white"></div>
            </div>
        </>
	)
}
