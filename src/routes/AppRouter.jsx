import { Routes, Route } from 'react-router-dom';
import { HomePage, About, CatsPage, DonationsPage } from '../pages';
import { Navbar, Footer } from '../components';

export const AppRouter = () => {
    return ( 
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <About /> } />
            <Route path='/cats' element={ <CatsPage /> } />
            <Route path='/donations' element={ <DonationsPage /> } />
        </Routes>
        <Footer />
    </>
    )
}