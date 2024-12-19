import { Link, useLocation } from "react-router-dom"


export const MercadoPagoStatus = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');

    const message = {
        approved: {
            title: "🐈✅ Pago Exitoso",
            description: "Felicidades, tu pago ha sido aprobado. Muchas gracias por comprar con nosotros"
        } ,
        failure: {
            title: "❌ Pago Fallido",
            description: "Lo sentimos :c, tu pago no se pudo procesar, por favor inténtalo más tarde."
        } ,
        pending: {
            title: "⌛ Pago Pendiente",
            description: "El pago está pendiente de confirmación, te notificaremos cuando sea procesado. Gracias por tu paciencia."
        } ,
        default: {
            title: "Estado desconocido",
            description: "No pudimos determinar el estado de tu pago, por favor contacta con el proveedor o con soporte."
        }
    }

    const { title, description } = message[status] || message.default;

    return (
        <div className="status-container">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={'/'}>Volver a la tienda</Link>
        </div>
    )
}