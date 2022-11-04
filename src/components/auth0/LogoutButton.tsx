import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../UI/Button";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })} text='Log Out' />
  );
};

export default LogoutButton;