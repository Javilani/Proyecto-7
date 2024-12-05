import { CartProvider } from "./context/Cart/cartGlobalState"
import { AppRouter } from "./routes/AppRouter"

export const App = () => {
  return (
      <CartProvider>
        <AppRouter />
      </CartProvider>
  )
}