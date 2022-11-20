import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from "react-toastify";

import { useTypedSelector } from "./hooks/useTypedSelector";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { authenticate } from "./store/actions/user";
import { addAccessTokenInterceptor } from "./api";
import Layout from "./components/UI/Layout";
import Login from "./components/Login";
import UserList from "./components/UserList";
import { Home } from "./pages/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import UserDetail from "./components/UserDetail";
import CompanyList from "./components/CompanyList";
import CompanyDetail from "./components/CompanyDetail";


function App() {
	const { currentUser, isAuth } = useTypedSelector((state) => state.user)
	const dispatch = useAppDispatch();
	const { getAccessTokenSilently, error } = useAuth0()

	useEffect(() => {
		addAccessTokenInterceptor(getAccessTokenSilently)
	}, [getAccessTokenSilently])

	useEffect(() => {
		!isAuth && dispatch(authenticate())
	}, [currentUser])

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
			</Routes>
			:
			<Routes>
				<Route path="/users" element={<UserList />} />
				<Route path="/users/:id" element={<UserDetail />} />
				<Route path="/companies" element={<CompanyList />} />
				<Route path="/companies/:id" element={<CompanyDetail />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
			}
		</Layout>

	)
}

export default App;

