import { useEffect, useReducer } from "react"
import { loginUser, registerUser } from "../../services/apiProyecto";
import { AuthContext } from "./userContext";
import { AuthReducer } from "./userReducer";


const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
};

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    // Con esto, cada vez que mande una petición, me va a verificar si es que el Token es válido o no.
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        if (token && user) {
            dispatch({
                type: 'LOGIN_USER',
                payload: { user, token }
            });
        }
    }, []);

    const register = async(userData) => {
        try {
            const data = await registerUser(userData);
            const { token } = data

            if(token) {
                const user = { email: userData.email };
                localStorage.setItem('token', token); // localStorage es un objeto que ya viene configurado en las herramientas de Frontend
                localStorage.setItem('user', JSON.stringify(user));

                dispatch({
                    type: 'REGISTER_USER',
                    payload: { user, token }
                })
            } else {
                throw new Error('Token no recibido');
            }
        } catch (error) {
            throw new Error(`Error al registrar el usuario. Error: ${error}`);
        }
    }

    const login = async(credentials) => {
        try {
            const data = await loginUser(credentials);
            console.log("Respuesta de loginUser:", data);

            const { data: token, user } = data;

            if (token && user) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify({ email: user.email }));
                localStorage.setItem('lastname', JSON.stringify({lastname: user.lastname}));
    
                // Guardamos el nombre (directamente desde user)
                const username = { name: user.name };
                localStorage.setItem('name', JSON.stringify(username));
    
                console.log("Token guardado:", token);
                console.log("Usuario guardado:", user);
                console.log("Nombre de usuario guardado:", username);
                console.log("Apellido guardado:", user.lastname);

                dispatch({
                    type: 'LOGIN_USER',
                    payload: { user, token },
                });
                console.log("Después de dispatch");
            }
        } catch (error) {
            console.error("Error al autenticar el usuario:", error.message);
            throw new Error(`Error al autenticar el usuario. Error: ${error}`);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('name');
        localStorage.removeItem('lastname');

        dispatch({ type: 'LOGOUT_USER' })
    }

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                register,
                login,
                logout
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}