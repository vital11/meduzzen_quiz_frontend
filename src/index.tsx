import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


const DOMAIN: string = process.env.REACT_APP_AUTH0_DOMAIN!;
const CLIENT_ID: string = process.env.REACT_APP_AUTH0_CLIENT_ID!;
const AUDIUENCE: string = process.env.REACT_APP_AUTH0_AUDIUENCE!;

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Auth0Provider
				domain={DOMAIN}
				clientId={CLIENT_ID}
				audience={AUDIUENCE}
				redirectUri={window.location.origin}
			>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
					<App />
				<ToastContainer />
			</Auth0Provider>,
		</Provider>
	</BrowserRouter>
);

reportWebVitals();
