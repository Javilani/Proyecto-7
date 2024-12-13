
export const CatItem = ({ cat }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card cat-item">
                {/* Encabezado con el nombre y la imagen */}
                <img src={cat.img} className="img-fluid" alt={cat.name} />
                <div className="card-body">
                    <h5 className="card-title">{cat.name}</h5>
                    <p className="card-text"><strong>Edad:</strong> {cat.age}</p>
                    <p className="card-text"><strong>Género:</strong> {cat.gender}</p>
                    <p className="card-text h-100">{cat.description}</p>
                    <button className="btn btn-dark text-white">Adóptame</button>
                </div>
            </div>
        </div>
    );
};
