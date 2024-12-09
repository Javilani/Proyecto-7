import { CatList } from "../components/cats/CatList"
import { DonationList } from "../components/donations/DonationList"
import gatoOliendo from "../assets/img/gato-oliendo.jpg";
import gatoMesa from "../assets/img/gato-sobre-mesa.jpg";
import { Link } from "react-router-dom";
import gatitoTierno from "../assets/img/gato-tierno.jpg";

export const HomePage = () => {
    return (
        <>
            <header>
                <h1>Fundación para Gatitos</h1>
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
                                className="d-block"
                                alt="Gatitos durmiendo"
                                style={{ width: "70%", height: "auto" }}
                            />
                        </div>
                        <div className="container mx-auto">
                            <div className="carousel-caption text-start bg-dark bg-opacity-50 p-4">
                                <h1>Gatito Oliendo</h1>
                                <p className="opacity-75">
                                    Los gatitos más adorables que jamás hayas visto.
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
                                className="d-block"
                                alt="Gatitos durmiendo"
                                style={{ width: "70%", height: "auto" }}
                            />
                        </div>
                        <div className="container">
                            <div className="carousel-caption text-start bg-dark bg-opacity-50 p-4">
                                <h1>Gatito mirando al horizonte</h1>
                                <p className="opacity-75">
                                    El gatito más adorables que jamás hayas visto.
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
                                className="d-block"
                                alt="Gatitos durmiendo"
                                style={{ width: "70%", height: "auto" }}
                            />
                        </div>
                        <div className="container">
                            <div className="carousel-caption text-start bg-dark bg-opacity-50 p-4">
                                <h1>Gatitos Durmiendo</h1>
                                <p className="opacity-75">
                                    Los gatitos más adorables que jamás hayas visto.
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


            <CatList />
            <DonationList />
        </>
    )
}