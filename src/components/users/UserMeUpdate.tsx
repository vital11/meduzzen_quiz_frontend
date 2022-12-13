import { useState } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ErrorMessage, Loader } from "../UI/Messages"
import Input from "../UI/Input"


export default function UserMeUpdate() {
    const { error: { updateUserMeError }, loading: { updateUserMeLoading } } = useTypedSelector((state) => state.user)
    const { updateUserMe } = useActions()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        updateUserMe({ name, password })
    }

    return (
        <>
            { updateUserMeLoading && <Loader /> }
            { updateUserMeError && <ErrorMessage error={ updateUserMeError.message } /> }
        
            <div className="p-10 rounded-2xl bg-white">
                <p className="text-center mb-8 font-medium tracking-wide cursor-pointer mx-auto">
                    Update Name or Password
                </p>
                <form className="space-y-4">
                    <Input value={ name } setValue={ setName } type="name" placeholder="Name" />
                    <Input value={ password } setValue={ setPassword } type="password" placeholder="Password" />
                    <button
                        type="submit"
                        className="w-full py-3 text-lg text-white bg-teal-300 rounded-lg hover:bg-teal-200 active:bg-teal-400 outline-none"
                        onClick={ handleClick }
                    >   Update
                    </button>
                </form>
            </div> 
        </>
    )
}
