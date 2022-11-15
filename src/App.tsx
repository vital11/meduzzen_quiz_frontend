import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from "react-toastify";

import { useTypedSelector } from "./hooks/useTypedSelector";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { authenticate } from "./store/actions/user";
import { addAccessTokenInterceptor } from "./api";
import Layout from "./components/Layout";
import Login from "./components/forms/Login";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import UserMe from "./components/UserMe";
import { Home } from "./pages/Home";
import Register from "./components/forms/Register";

function App() {
	const { user, isAuth } = useTypedSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const { getAccessTokenSilently, error } = useAuth0()

	useEffect(() => {
		addAccessTokenInterceptor(getAccessTokenSilently)
	}, [getAccessTokenSilently])

	useEffect(() => {
		!isAuth && dispatch(authenticate())
	}, [user])


	if (error) {
		toast.error("Authentication Error")
	}

	return (

		<Layout>
			{!isAuth ?
			<Routes>
				<Route path="/signup" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
			:
			<Routes>
				<Route path="/users" element={<UserList />} />
				<Route path="/users/:id" element={<UserProfile />} />
				<Route path="/users/me/" element={<UserMe />} />
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
			}
		</Layout>

	)
}

export default App;

