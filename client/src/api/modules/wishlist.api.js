import apiFunctions from "../apiFunction/api.functions";

const wishlistEndPoints = {
    createWishlist: () => `wishlists`,
    deleteWishlist: (wishlistId) => `wishlists/${wishlistId}`,
    getWishlist: () => `wishlists`,
}

const wishlistApi = {
    createWishlist: async (data) => {
        try {
            // console.log(data)
            const response = await apiFunctions.postData(wishlistEndPoints.createWishlist(), {data});
            return response;
        } catch (error) {
            return error;
        }
    },
    deleteWishlist: async (wishlistId) => {
        try {
            // console.log(data)
            const response = await apiFunctions.delete(wishlistEndPoints.deleteWishlist(wishlistId));
            return response;
        } catch (error) {
            return error;
        }
    },
    getWishlist: async (qs) => {
        try {
            // console.log(data)
            const response = await apiFunctions.get(wishlistEndPoints.getWishlist(), qs);
            return response;
        } catch (error) {
            return error;
        }
    }
}

export default wishlistApi;