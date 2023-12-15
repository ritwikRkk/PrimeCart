import apiFunctions from "../apiFunction/api.functions";

const userEndPoints = {
    createuser: () => `auth/local/register`,
    loginuser: () => `auth/local`,
    getuser: () => `users/me`,
}

const userApi = {
    createuser: async ( data ) => {
        try {
            // console.log(data)
            const response = await apiFunctions.post(userEndPoints.createuser(), data);
            return response;
        } catch (error) {
            return error;
        }
    },
    loginuser: async ( data ) => {
        try {
            // console.log(data)
            const response = await apiFunctions.post(userEndPoints.loginuser(), data);
            return response;
        } catch (error) {
            return error;
        }
    },
    getUser: async ( token ) => {
        try {
            // console.log(token)
            const response = await apiFunctions.getData(userEndPoints.getuser(), token);
            return response;
        } catch (error) {
            return error;
        }
    },
}

export default userApi;