import { useContext } from "react";
import { CartContext } from "../../context/Cart/cartContext";
import donationImg from "../../assets/img/donation.png";


export const CartItem = ({ donation }) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext)

    return (
        <div className="cart-item">
            <img className="cart-item__image" src={donation.img || donationImg } alt={donation.name} />
            <div className="cart-item__details">
                <h3>{donation.title}</h3>
                <p>Precio: ${donation.price} CLP</p>
                <div className="quantity-control">
                    <button className="button-more-less" onClick={() => decreaseQuantity(donation._id)} disabled={donation.quantity <= 1}>-</button>
                    <span className="product-quantity">{donation.quantity}</span>
                    <button className="button-more-less" onClick={() => increaseQuantity(donation._id)}>+</button>
                </div>
                <p>Subtotal: ${(donation.price * donation.quantity).toFixed(0)} CLP</p>
            </div>
            <button 
                className="button remove-button" 
                onClick={() => {
                    console.log('Removing:', donation._id); // Debug
                    removeFromCart(donation._id)}}
            >
                Eliminar
            </button>
        </div>
    )
}