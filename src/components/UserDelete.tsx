import { useParams } from "react-router-dom";
import { userAPI } from "../api/userAPI";


interface Params {
    id: string;
}   

const UserDelete = () => {
    const {id} = useParams<keyof Params>() as Params;
    
    return (
        <div className="w-[600px] m-5 p-10 rounded-xl bg-white">
            <p className="w-80 text-center font-medium tracking-wide cursor-pointer mx-auto mb-8">
                Delete Your Account
            </p>
            <button
                type="submit"
                className="w-full py-3 text-center text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                onClick={() => userAPI.deleteUser(id)}
            >   Delete
            </button>
        </div>
    );
}

export default UserDelete;




