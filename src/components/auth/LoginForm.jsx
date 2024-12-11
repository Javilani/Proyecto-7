import { useContext, useState } from "react"
import { AuthContext } from "../../context/User/userContext"
import { useNavigate } from "react-router-dom";


export const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate() // Hook de React para redireccionar o 'navegar' a otra ruta
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("")

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }

    // El evento submit provoca que la página se recargue
    const handleSubmit = async (event) => {
        event.preventDefault(); // Con este prevengo que no se ejecute la recarga de la página

        try {
            await login(credentials);
            navigate('/')
        } catch (error) {
            setError(`Error al iniciar sesión. Verifica tus credenciales. ERROR: ${error}`)

        }
    }

    return (
        <div className="form-container">
        <form className="form flex-center" onSubmit={handleSubmit}>
            <div className="form__group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Por favor ingresa tu email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form__group">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Por favor ingresa tu contraseña"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="button login-button">Iniciar Sesión</button>
        </form>
        </div>
    )
}