

export const Profile = () => {
        // Obtener los datos del usuario del localStorage
        const user = JSON.parse(localStorage.getItem('user')) || {};
        const name = JSON.parse(localStorage.getItem('name')) || {};
        const lastname = JSON.parse(localStorage.getItem('lastname')) || {};
    
        return (
            <div className="profile-container mt-5">
                <h2 className="text-center">Perfil de Usuario</h2>
                <div className="mt-4">
                    <h4><strong>Nombre:</strong> {name.name}</h4>
                    <h4><strong>Apellido:</strong> {lastname.lastname}</h4>
                    <h4><strong>Email:</strong> {user.email}</h4>
                </div>
            </div>
        );
};