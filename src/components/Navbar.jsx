import { Link } from 'react-router-dom';

export const Navbar = () => {
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
                        </ul>
                    </div>
                    {/* Grupo de botones a la derecha */}
                    <div className="ms-auto d-flex">
                        <Link className="btn btn-light mx-1" to="/login">Login</Link>
                        <Link className="btn btn-outline-light mx-1" to="/cart">Carro</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
