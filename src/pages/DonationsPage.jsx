import { DonationList } from "../components/donations/DonationList"

export const DonationsPage = () => {
    return (
        <>
            <header className="d-flex justify-content-center align-items-center">
                <h1>¡Realiza una donación!</h1>
            </header>

            <DonationList />
        </>
    )
}