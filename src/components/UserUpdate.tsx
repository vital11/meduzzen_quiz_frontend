import { useState } from "react";
import { useParams } from "react-router-dom";
import { userAPI } from "../api/userAPI";
import Input from "./UI/Input";


const UserUpdate = () => {
    const {id} = useParams<{id: string}>();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    
        return (
            <div className="w-[600px] p-10 rounded-xl bg-white absolute top-40 left-1/2 -translate-x-1/2 text-gray-600 text-md">
                <div>
                    <p className="w-80 text-center mb-8 font-semibold tracking-wide cursor-pointer mx-auto">
                        Change Your Name or Password
                    </p>
                </div>
                <form>
                    <div className="space-y-4">
                        <Input value={name} setValue={setName} type="name" placeholder="Name"  />
                        <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
                    </div>
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="py-3 w-full text-lg text-white bg-yellow-400 rounded-lg hover:bg-yellow-300 active:bg-yellow-500 outline-none"
                            onClick={() => userAPI.updateUser(id, name, password)}
                        >   Update
                        </button>
                    </div>
                </form>
            </div>
        );
}

export default UserUpdate;
