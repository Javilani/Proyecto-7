import axios from 'axios';

const BASE_URL = 'https://proyecto-6-tvf2.onrender.com';

const apiProductsClients = axios.create({
    baseURL: BASE_URL
})

export const getAllCats = async () => {
    try {
        const { data } = await apiProductsClients.get('/cats/readall')
        return data
    } catch (error) {
        throw new Error(`Error al capturar la información de los gatos`, error)
    }
};

export const getAllDonations = async () => {
    try {
        const { data } = await apiProductsClients.get('/donations/readall')
        return data
    } catch (error) {
        throw new Error(`Error al capturar las donaciones: ${error.message}`);
    }
}

// Para traer los usuarios
const API_URL = 'https://proyecto-6-tvf2.onrender.com/users';
const apiClient = axios.create({
    baseURL: API_URL,
})

// Para que cada vez que mande un registerUser o un loginUser, se captura el token y se verifica quee esté ahí.
apiClient.interceptors.request.use(    // Esto viene de axios
    (config) => {
        const token = localStorage.getItem('token');
        if(token) {
            config.headers["authorization"] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export const registerUser = async(userData) => {
    try {
        const { data } = await apiClient.post('/create', userData)
        return data  // Se usa data (en axios) porque es donde se encuentra la respuesta de la Api, es la configuración de axios.
    } catch (error) {
        throw new Error(`No pudimos registrar al usuario. ${error}`)
    }
}

//JSDocs

/**
 * Esta función recibe credenciales como objeto y me retorna un token desde el llamado a la API de autenticación
 * @param {object} credentials - Objeto que contiene email y contraseña como strings
 * @returns {string} - Retorna el Token
 */

export const loginUser = async(credentials) => {
    try {
        const { data } = await apiClient.post('/login', credentials)
        return data 
    } catch (error) {
        throw new Error(`Credenciales inválidas. ${error}`)
    }
}