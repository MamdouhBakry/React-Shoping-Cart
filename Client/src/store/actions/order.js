import axios from "axios";
import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER } from "./types.js"
export const createOrder = (order) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("http://localhost:5001/api/orders", order);
            if (res.status === 200) {
                dispatch({
                    type: CREATE_ORDER,
                    order: res.data
                })
            }
        } catch (error) {
            console.log(error)
        }
        localStorage.clear("cartItems");
        dispatch({
            type: CLEAR_CART
        })
    }
}

export const clearOrder = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_ORDER
        })
    }
}