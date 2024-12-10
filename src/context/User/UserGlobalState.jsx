import { useReducer } from "react"
import { loginUser, registerUser } from "../../services/apiProyecto";
import { AuthContext } from "./userContext";
import { AuthReducer } from "./userReducer";


const initialState = {
    user: null,
    token: null
}

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

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
            const data = await loginUser(credentials)
            const { token } = data;

            if(token) {
                const user = { email: credentials.email };
                localStorage.setIten('token', token);
                localStorage.setItem('user', JSON.stringify(user))

                dispatch({
                    type: 'LOGIN_USER',
                    payload: { user, token }
                })
            }
        } catch (error) {
            throw new Error(`Error al autenticar el usuario. Error: ${error}`);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

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