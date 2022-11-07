import { Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import UserList from "./components/UserList";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import Layout from "./components/Layout";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Login from "./components/forms/Login";
import UserMe from "./components/UserMe";
import { IUser } from "./types/user";
import { userAPI } from "./api/userAPI";


function App() {
	const isAuth = useTypedSelector((state) => state.user.isAuth);
	console.log(isAuth)

	const [user, setUser] = useState<IUser>();

	useEffect(() => {
		userAPI.readUserMe(setUser)
		console.log(user)
	}, []);

	return (
		<>
			<Navbar />

			<Layout>
				{!isAuth ?
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Navigate replace to="/" />} />
				</Routes>
				:
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/users" element={<UserList />} />
					<Route path="/users/:id" element={<UserProfile />} />
					<Route path="/users/me" element={<UserMe />} />
					<Route path="*" element={<Navigate replace to="/" />} />
				</Routes>
				}
			</Layout>
		</>
	)
}

export default App;

