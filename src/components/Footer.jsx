
export const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container">
                <div className="row align-items-center">
                    {/* Logo de Instagram */}
                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                    
                    {/* Información de contacto */}
                    <div className="col-md-4 text-center">
                        <p className="mb-1">Correo: contacto@tusitio.com</p>
                        <p className="mb-0">Teléfono: +56 9 1234 5678</p>
                    </div>

                    {/* Derechos reservados */}
                    <div className="col-md-4 text-center text-md-end">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Fundación Gatitos. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
