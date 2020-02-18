import axios from 'axios';
const BASE_URL = process.env['REACT_APP_BASE_URL'];

export const getOrders = async (merchantID) => {
    try {
        const request = await axios.get(BASE_URL + '/merchants/' + merchantID + '/orders')
        return request.data;
    } catch (error) {
        console.log("error fetching orders", error)
    }
}