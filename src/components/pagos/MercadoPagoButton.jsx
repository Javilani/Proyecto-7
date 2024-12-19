import { useState } from "react";
import { apiMercadoPago } from "../../services/apiProyecto";
import { Wallet } from "@mercadopago/sdk-react/esm";

export const MercadoPagoButton = ({ cart, total, onPaymentSuccess }) => {
    const [preferenceId, setPreferenceId] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGeneratePreference = async() => {
        try {
            const { data } = await apiMercadoPago.post('/create_preference', { cart, total });
            setPreferenceId(data.id);
        } catch (error) {
            console.error('Error al generar las prefencias de pago: ', error.response?.data || error )
        } finally {
            setLoading(true)
        }
    }

    return (
        <>
            <button onClick={handleGeneratePreference}
            className="button button-pay"
            disabled={loading}
            >
                {loading ? 'Cargando pasarela de pago...' : 'Opciones de Mercado de Pago'}
            </button>

            {
                preferenceId && (
                    <Wallet
                        initialization={{ preferenceId }}
                        onReady={() => console.log('Wallet Ready')}
                        onError={(error) => console.error('Error en Wallet', error)}
                        onPayment={(details) => onPaymentSuccess(details)}
                    />
                )
            }
        </>
    )
}

// import { initMercadoPago } from '@mercadopago/sdk-react';
// import { useEffect } from "react"
// import { apiMercadoPago } from "../../services/apiProyecto";


// export const MercadoPagoButton = ({ cart, total, onPaymentSuccess}) => {
//     useEffect(() => {
//         const loadMercadoPagoButton = async () => {
//             const mercadoPago = initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY, { locale: "es-CL" });

//             const response = await apiMercadoPago.post('/create-preference', { cart, total });
//             console.log(response);

//             mercadoPago.checkout({
//                 preference: { id: response.data.id },
//                 autoOpen: true
//             });
//         };

//         loadMercadoPagoButton();
//     }, [cart, total]);

//     return (
//         <div className="mercadoPago-container">
//             <button className="mercagoPago-button">Pagar con Mercado Pago</button>
//         </div>
//     )
// }

//import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


// export const MercadoPagoButton = ({ cart, total, onPaymentSuccess }) => {
//     initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY, { locale: "es-CL" });
    
//     return (
//         <div className="mercadoPago-container">
//             <button className="mercagoPago-button">Pagar con Mercado Pago</button>
//             <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts: { valueProp: 'smart_option' } }} />
//         </div>
//     )
// }