import { Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import UserList from "./pages/UserList";
import { Home } from "./pages/Home";

const DOMAIN: string = process.env.REACT_APP_AUTH0_DOMAIN!;
const CLIENT_ID: string = process.env.REACT_APP_AUTH0_CLIENT_ID!;
const AUDIUENCE: string = process.env.REACT_APP_AUTH0_AUDIUENCE!;

function App() {
  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      audience={AUDIUENCE}
      redirectUri={window.location.origin}
      scope="read:current_user update:current_user_metadata"
    >
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Auth0Provider>
  );
}

export default App;
