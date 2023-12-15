import apiFunctions from "../apiFunction/api.functions";


const shopEndPoints = {
    list: () => `products`,
    getProduct: ({ productId }) => `products/${productId}`,
    getSubCategory: () => `sub-categories`,
}

const shopApi = {
    getList: async ({ qs }) => {
        try {
            // console.log(qs)
            const response = await apiFunctions.get(shopEndPoints.list(), qs);
            return response;
        } catch (error) {
            return error;
        }
    },
    getProduct: async ({ productId, qs }) => {
        // console.log(productId, qs);
        try {
            const response = await apiFunctions.get(shopEndPoints.getProduct({ productId }), qs);
            return response;
        } catch (error) {
            return error;
        }
    },
    getSubCategory: async () => {
        try {
            const response = await apiFunctions.get(shopEndPoints.getSubCategory());
            return response;
        } catch (error) {
            return error;
        }
    },

}

export default shopApi;