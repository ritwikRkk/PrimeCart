import apiFunctions from "../apiFunction/api.functions";

const orderEndPoints = {
    createOrder: () => `orders`,
    updateCart: (cartId) => `carts/${cartId}`,
    deleteCart: (cartId) => `carts/${cartId}`,
    getCart: () => `carts`,
}

const OrderApi = {
    createOrder: async (data) => {
        try {
            // console.log(data)
            // const response = await apiFunctions.postData(orderEndPoints.createOrder(), data );
            const response = await apiFunctions.postData(orderEndPoints.createOrder(),  data );
            return response;
        } catch (error) {
            return error;
        }
    },
    updateCart: async (cartId, data) => {
        try {
            // console.log(data)
            const response = await apiFunctions.putData(orderEndPoints.updateCart(cartId), { data });
            return response;
        } catch (error) {
            return error;
        }
    },
    deleteCart: async (cartId) => {
        try {
            // console.log(data)
            const response = await apiFunctions.delete(orderEndPoints.deleteCart(cartId));
            return response;
        } catch (error) {
            return error;
        }
    },
    getCart: async (qs) => {
        try {
            // console.log(data)
            const response = await apiFunctions.get(orderEndPoints.getCart(), qs);
            return response;
        } catch (error) {
            return error;
        }
    }
}

export default OrderApi;