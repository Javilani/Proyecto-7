import { Routes, Route } from 'react-router-dom';
import { HomePage, About, CatsPage, DonationsPage } from '../pages';
import { Navbar, Footer } from '../components';
import { CartPage } from '../pages/CartPage';

export const AppRouter = () => {
    return ( 
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <About /> } />
            <Route path='/cats' element={ <CatsPage /> } />
            <Route path='/donations' element={ <DonationsPage /> } />
            <Route path='/cart' element={ <CartPage /> } />
        </Routes>
        <Footer />
    </>
    )
}