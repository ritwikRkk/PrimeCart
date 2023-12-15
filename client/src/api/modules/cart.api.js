import apiFunctions from "../apiFunction/api.functions";

const wishlistEndPoints = {
    createCart: () => `carts`,
    updateCart: (cartId) => `carts/${cartId}`,
    deleteCart: (cartId) => `carts/${cartId}`,
    getCart: () => `carts`,
}

const cartApi = {
    createCart: async (data) => {
        try {
            // console.log(data)
            const response = await apiFunctions.postData(wishlistEndPoints.createCart(), { data });
            return response;
        } catch (error) {
            return error;
        }
    },
    updateCart: async (cartId, data) => {
        try {
            // console.log(data)
            const response = await apiFunctions.putData(wishlistEndPoints.updateCart(cartId), { data });
            return response;
        } catch (error) {
            return error;
        }
    },
    deleteCart: async (cartId) => {
        try {
            // console.log(data)
            const response = await apiFunctions.delete(wishlistEndPoints.deleteCart(cartId));
            return response;
        } catch (error) {
            return error;
        }
    },
    getCart: async (qs) => {
        try {
            // console.log(data)
            const response = await apiFunctions.get(wishlistEndPoints.getCart(), qs);
            return response;
        } catch (error) {
            return error;
        }
    }
}

export default cartApi;