import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
    const location = useLocation();
    const accessToken = sessionStorage.getItem('accessToken');
    return (
        accessToken ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth