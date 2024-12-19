import gatoOliendo from "../assets/img/gato-oliendo.jpg";
import gatoMesa from "../assets/img/gato-sobre-mesa.jpg";
import { Link } from "react-router-dom";
import gatitoTierno from "../assets/img/gato-tierno.jpg";
import donation from "../assets/img/donation.png";
import dosGatitos from "../assets/img/dos-gatitos.png";
import equipoTrabajo from "../assets/img/equipo-trabajo.jpg";
import blog from "../assets/img/blog.jpg";
import vet from "../assets/img/vet.jpg";
import tienda from "../assets/img/tienda-mascotas.jpg";

export const HomePage = () => {
    return (
        <>
            <header className="header-homepage">
                <h1 id="h1-homepage">Fundación para Gatitos</h1>
            </header>

            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="0"
                        className=""
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="1"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="2"
                        className=""
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="d-flex justify-content-center">
                            <img
                                src={gatoOliendo}
                                className="d-block img-carousel"
                                alt="Gatitos durmiendo"
                            />
                        </div>
                        <div className="">
                            <div className="carousel-caption text-start bg-dark bg-opacity-50 p-4">
                                <h2>Conócelos a todos</h2>
                                <p className="opacity-75">
                                    Aquí podrás conocer a todos los michis que buscan un hogar.
                                </p>
                                <p>
                                    <Link className="btn btn-lg btn-dark" to="/cats">¡Adopta uno hoy!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">

                        <div className="d-flex justify-content-center">
                            <img
                                src={gatoMesa}
                                className="d-block img-carousel"
                                alt="Gatitos durmiendo"
                            />
                        </div>
                        <div className="">
                            <div className="carousel-caption text-start bg-dark bg-opacity-50 p-4">
                                <h2>¿Quieres ayudar?</h2>
                                <p className="opacity-75">
                                    Puedes realizar una donación para poder seguir ayudando a más gatitos.
                                </p>
                                <p>
                                    <Link className="btn btn-lg btn-dark" to="/donations">¡Dona hoy!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">

                        <div className="d-flex justify-content-center">
                            <img
                                src={gatitoTierno}
                                className="d-block img-carousel"
                                alt="Gatitos durmiendo"
                            />
                        </div>
                        <div className="">
                            <div className="carousel-caption text-start bg-dark bg-opacity-50 p-4">
                                <h2>¿Quiénes somos?</h2>
                                <p className="opacity-75">
                                    Aquí puedes conocer un poco más sobre nuestra labor gatuna.
                                </p>
                                <p>
                                    <Link className="btn btn-lg btn-dark" to="/about">Conócenos</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="opciones">
            <div className="opc-card">
                <img src={dosGatitos} alt="" className="img-opciones" />
                <Link className="btn btn-lg btn-dark" to="/cats">Adopciones</Link>
            </div>
            <div className="opc-card">
                <img src={donation} alt="" className="img-opciones" />
                <Link className="btn btn-lg btn-dark" to="/donations">Donaciones</Link>
                </div>
                <div className="opc-card">
                <img src={equipoTrabajo} alt="" className="img-opciones" />
                <Link className="btn btn-lg btn-dark" to="/about">Conócenos</Link>
                </div>
                <div className="opc-card">
                <img src={blog} alt="" className="img-opciones" />
                <Link className="btn btn-lg btn-dark" to="/prox">Blog</Link>
                </div>
                <div className="opc-card">
                <img src={vet} alt="" className="img-opciones" />
                <Link className="btn btn-lg btn-dark" to="/prox">Veterinarios</Link>                
                </div>
                <div className="opc-card">
                <img src={tienda} alt="" className="img-opciones" />
                <Link className="btn btn-lg btn-dark" to="/prox">Tienda</Link>                
                </div>
            </section>

        </>
    )
}