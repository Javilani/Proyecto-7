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