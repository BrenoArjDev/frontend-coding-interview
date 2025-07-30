import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

interface Props {
  children: React.JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
