import { useEffect, useState } from "react";
import { getAllCats } from "../../services/apiProyecto";
import { CatItem } from "./CatItem";

export const CatList = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        getAllCats().then((data) => setCats(data))
    }, [])

    return (
        <div className="cat-list">
            {
                cats.length > 0 ? (
                    <div className="row">
                        {cats.map((cat) => (
                            <CatItem key={cat._id} cat={cat} />
                        ))}
                    </div>
                ) : (
                    <p>Cargando Gatos...</p>
                )
            }
        </div>
    )
}