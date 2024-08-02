import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children,redirecTo}) => {
    const {currentUser} = useSelector(state => state.user);
    return currentUser ? children : <Navigate to={redirecTo}/>
};

export default ProtectedRoute;