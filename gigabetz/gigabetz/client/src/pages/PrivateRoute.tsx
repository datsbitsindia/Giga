import { Route, Redirect, RouteProps } from "react-router-dom";
import { Roles, useAuth } from "../context/auth-context";

type IProps = {
  allowedRoles: Roles[];
};
export const PrivateRoute = ({
  allowedRoles,
  ...props
}: IProps & RouteProps) => {
  const { isAllowedToRole, user } = useAuth();

  const isAllowed = isAllowedToRole ? isAllowedToRole(allowedRoles) : false;

  if (isAllowed) {
    if (user?.role.name === "SuperAdmin") {
      return <Redirect from="/" to="/admin/user-list" />;
    } else {
      return <Redirect to="/" />;
    }
  }
  return <Route {...props} />;
};
