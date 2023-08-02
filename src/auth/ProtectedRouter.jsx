import Cart from "../page/cart/carrito";
import Login from "../page/login";
import { useAuth } from "./AuthProvider"

function ProtectedRouter(params) {
   const auth = useAuth();
   
   return auth.isAuthenticated ? <Cart/> : <Login/>
}

export default ProtectedRouter