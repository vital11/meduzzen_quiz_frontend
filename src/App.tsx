import { Navigate, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import UserList from "./components/UserList";
import { Home } from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import UserUpdate from "./components/UserUpdate";
import UserProfile from "./components/UserProfile";
import Layout from "./components/Layout";

function App() {

	return (
		<div className="app">
			<Navbar />

			<Layout>
				<Routes>

					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />

					<Route path="/users" element={<UserList />} />
					<Route path="/users/:id" element={<UserProfile />} />
					<Route path="/users/:id/update" element={<UserUpdate />} />

					<Route path="*" element={<Navigate replace to="/" />} />
				</Routes>

			</Layout>
		</div>
	)
}

export default App;
