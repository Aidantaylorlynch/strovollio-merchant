import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api'

export const getOrders = async (merchantID) => {
    try {
        const request = await axios.get(BASE_URL + '/merchants/' + merchantID + '/orders')
        return request.data;
    } catch (error) {
        console.log("error fetching orders", error)
    }
}