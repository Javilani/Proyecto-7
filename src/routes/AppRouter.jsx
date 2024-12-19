import { Routes, Route } from 'react-router-dom';
import { HomePage, About, CatsPage, DonationsPage, LoginPage, ProximamentePage, RegisterForm, Profile, MercadoPagoStatus } from '../pages';
import { Navbar, Footer } from '../components';
import { CartPage } from '../pages/CartPage';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    return ( 
    <>
        <Navbar />
        <div className='body-container'>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <About /> } />
            <Route path='/cats' element={ <CatsPage /> } />
            <Route path='/donations' element={ <DonationsPage /> } />
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='/register' element={ <RegisterForm />} />
            <Route path='/profile' element={ <Profile />} />
            <Route path='/prox' element={ <ProximamentePage /> }/>

            <Route 
            path='/cart' 
            element={
                <PrivateRoute>
                    <CartPage />
                </PrivateRoute> 
                } 
            />
            <Route 
                path='/mercadopago/status'
                element={
                    <PrivateRoute>
                        <MercadoPagoStatus />
                    </PrivateRoute>
                }
            />
        </Routes>
        </div>
        <Footer />
    </>
    )
}