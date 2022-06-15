import { Navigate } from "react-router-dom";

interface IProtected {
    isAuthenticated: boolean,
    children: any
}

const ProtectedRoute = ({
    isAuthenticated,
    children
}: IProtected) => {
    if(isAuthenticated === false) return <Navigate to="/" replace />
    return children
};

export default ProtectedRoute;