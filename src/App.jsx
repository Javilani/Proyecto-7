import { CartProvider } from "./context/Cart/cartGlobalState"
import { AuthProvider } from "./context/User/UserGlobalState"
import { AppRouter } from "./routes/AppRouter"
import './App.css';

export const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  )
}