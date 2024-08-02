import { Routes as ReactDomRoutes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Help from "../pages/Help/Help"
import Gender from "../pages/Gender/Gender"
import Clothing from "../pages/Clothing/Clothing"
import Cart from "../pages/Cart/Cart"
import NotFound from "../pages/NotFound/NotFound"
import Login from "../pages/Login/Login"
import Checkout from "../pages/Checkout/Checkout"
import Register from "../pages/Register/Register"
import EditItem from "../pages/EditItem/EditItem"
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute"
import Orders from "../pages/Orders/Orders"

export const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path="/" element={<Home/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/gender/men" element={<Gender route="/gender/men"/>}/>
            <Route path="/gender/women" element={<Gender route="/gender/women"/>}/>
            <Route path="/clothing/:id" element={<Clothing/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" 
                    element={
                        <ProtectedRoute redirecTo="/login">
                            <Checkout/>
                        </ProtectedRoute>
                    }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/item/create" 
                    element={
                        <ProtectedRoute redirecTo="/login">
                            <EditItem action="create"/>
                        </ProtectedRoute>
                    }/>
            <Route path="/item/update" 
                    element={
                        <ProtectedRoute redirecTo="/login">
                            <EditItem action="update"/>
                        </ProtectedRoute>
                    }/>
            <Route path="/item/delete" 
                    element={
                        <ProtectedRoute redirecTo="/login">
                            <EditItem action="delete"/>
                        </ProtectedRoute>
                    }/>
            <Route path="/orders" 
                    element={
                        <ProtectedRoute redirecTo="/login">
                            <Orders/>
                        </ProtectedRoute>
                    }/>
            <Route path="*" element={<NotFound/>}/>
        </ReactDomRoutes>
    )
};