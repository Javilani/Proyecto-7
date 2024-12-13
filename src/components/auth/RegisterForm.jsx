import { useContext, useState } from "react";
import { AuthContext } from "../../context/User/userContext";
import { useNavigate } from "react-router-dom";


export const RegisterForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    });
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);

        try {
            await register(userData);
            alert('Su cuenta ha sido creada con éxito');
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="register-container">
        <form onSubmit={handleSubmit} className="the-form-container">
            <div className="form__group">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    value={userData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form__group">
                <label htmlFor="lastname">Apellido</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Apellido"
                    value={userData.lastname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form__group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form__group">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="button login-button">Registrar</button>
        </form>
        </div>
    ); 
};