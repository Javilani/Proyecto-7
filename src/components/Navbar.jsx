import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/User/userContext';

export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);




    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">LOGO</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Grupo de botones centrados */}
                    <div className="d-flex justify-content-center w-100">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="btn btn-outline-light mx-1" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-light mx-1" to="/about">Acerca de</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-light mx-1" to="/cats">Gatos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-light mx-1" to="/donations">Donaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-light mx-1" to="/prox">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-light mx-1" to="/prox">Veterinarios</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Grupo de botones a la derecha */}
                    <div className="ms-auto d-flex align-items-center">
                        {
                            !user ? (
                                <li>
                                    <Link className="btn btn-light mx-1" to="/login">Login</Link>
                                </li>
                            ) : (
                                <>
                                    <Link className="list-unstyled text-white mx-1 mt-4" to="/profile">
                                        {JSON.parse(localStorage.getItem('name'))?.name}
                                    </Link>
                                    <li>
                                        <button className="btn btn-danger mx-1" onClick={logout}>Logout</button>
                                    </li>
                                </>
                            )
                        }
                        <li>
                            <Link className="btn btn-outline-light mx-1" to="/cart">Carro</Link>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
};
