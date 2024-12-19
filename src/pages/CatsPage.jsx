import { CatList } from "../components/cats/CatList"

export const CatsPage = () => {
    return (
        <>
            <header className="d-flex justify-content-center align-items-center">
                <h1>¡Adopta un gato!</h1>
            </header>

            <CatList />
        </>
    )
}