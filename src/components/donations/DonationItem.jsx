import { useContext } from "react";
import { CartContext } from "../../context/Cart/cartContext";
import donationImg from "../../assets/img/donation.png";

export const DonationItem = ({ donation }) => {

    const { addToCart } = useContext(CartContext)

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card donation-item">
                <img src={donation.img || donationImg } className="card-img-top" alt={donation.name} />
                <div className="card-body">
                    <h5 className="card-title">{donation.name}</h5>
                    <p className="card-text"><strong>Precio:</strong> ${donation.price} CLP</p>
                    <button className="btn btn-dark text-white" onClick={() => addToCart(donation)}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}
