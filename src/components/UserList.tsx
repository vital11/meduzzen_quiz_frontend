import React, { useEffect } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { NavLink } from 'react-router-dom';

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.users)
    const { fetchUsers } = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => 
                <div 
                    key={user.id}
                    className="px-5 py-2 my-2 bg-slate-100"
                >
                    <NavLink to={ `/users/${user.id}` }>
                        {user.id} - {user.email} - {user.name} - {String(user.is_active)} - {String(user.is_superuser)}
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default UserList;