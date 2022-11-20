import { useParams } from "react-router-dom"

import PageTitle from "./UI/PageTitle"
import Company from "./companies/Company"
import CompanyUpdate from "./companies/CompanyUpdate"
import CompanyDelete from "./companies/CompanyDelete"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { ErrorMessage } from "./UI/Messages"


interface Params {
    id: string;
}

export default function CompanyDetail() {
    const { id } = useParams<keyof Params>() as Params
    const { currentUser } = useTypedSelector((state) => state.user)
    const { companies } = useTypedSelector((state) => state.companies)
    const company = companies.find(comp => comp.id === Number(id))

    return (
        <>
            <PageTitle title="Company Detail"/>
       
            { company?.is_private && currentUser.id !== company?.owner_id
            ? <ErrorMessage error="This is a Private company" />
            : <div className="flex flex-row bg-white">
                <div className="basis-1/4 max-w-[25%] gap-14 space-y-5 p-5 bg-gray-200">
                    <Company />
                    { currentUser.id === company?.owner_id && 
                    <>
                        <CompanyUpdate />
                        <CompanyDelete />
                    </> }
                </div>
                <div className="basis-1/4 bg-white"></div>
                <div className="basis-1/4"></div>
                <div className="basis-1/4"></div>
            </div> }
        </>
	)
}
