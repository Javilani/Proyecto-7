import { Routes, Route } from 'react-router-dom';
import { HomePage, About, CatsPage, DonationsPage, LoginPage } from '../pages';
import { Navbar, Footer } from '../components';
import { CartPage } from '../pages/CartPage';
// import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    return ( 
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <About /> } />
            <Route path='/cats' element={ <CatsPage /> } />
            <Route path='/donations' element={ <DonationsPage /> } />
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='/cart' element={ <CartPage />} />
            {/* <Route 
            path='/cart' 
            element={
                <PrivateRoute>
                    <CartPage />    Lo que habría que hacer si quiero una ruta privada que solo se puede ver cuando he iniciado sesión
                </PrivateRoute> 
                } 
            /> */}
        </Routes>
        <Footer />
    </>
    )
}