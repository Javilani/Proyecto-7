import { useEffect, useState } from "react"
import { getAllDonations } from "../services/apiProyecto"
import { DonationItem } from "./DonationItem";


export const DonationList = () => {
    const [ donations, setDonations ] = useState([]);

    useEffect(() => {
        getAllDonations().then((data) => setDonations(data)).catch((error) => console.error(error));
    }, [])

    return (
        <div className="donation-list">
            {
                donations.length > 0 ? (
                    <div className="container">
            <div className="row">
                {donations.map(donation => (
                    <DonationItem key={donation._id} donation={donation} />
                ))}
            </div>
        </div>
                ) : (
                    <p>Cargando Donaciones...</p>
                )
            }
        </div>
    )
}