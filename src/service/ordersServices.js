import axios from "axios"


const URL = "http://localhost:8080/api/v1/orders"

export const sendOrder = async (endpoint, data) => {
    try {
        const response = await axios.post(`${URL}/${endpoint}`, data);
        if (response && response.status === 200) {
            return response;
        }
        return;
    } catch (error) {
        console.error(error);
    }
}