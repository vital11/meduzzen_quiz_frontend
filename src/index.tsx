import ReactDOM from "react-dom/client";
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
	<Auth0Provider
		domain={DOMAIN}
		clientId={CLIENT_ID}
		audience={AUDIUENCE}
		redirectUri={window.location.origin}
		scope="read:current_user update:current_user_metadata"
	>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</Auth0Provider>,
);

reportWebVitals();
