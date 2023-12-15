

const baseUrl = process.env.REACT_APP_API_BASE_URL;
// const baseUrl = "http://localhost:1337/api";

const apiFunctions = {

    // ****************************************************************
    get: async (endPoint, qs) => {
        // console.log(qs);
        const query = new URLSearchParams(qs);
        const queryString = query.toString();
        const url = `${baseUrl}/${endPoint}?${queryString}`;
        // console.log(qs, query, queryString, url);
        // console.log(url);
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
                },
            });
            const json = await response.json();
            // console.log(json);
            return json;

        } catch (error) {
            // console.error(error);
            return error;
        }
    },

    // ****************************************************************
    post: async (endPoint, data) => {
        const url = `${baseUrl}/${endPoint}`;
        // console.log(data);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            // console.log(json);
            return json;
        } catch (error) {
            console.error(error);
            return error;
        }

    },

    // ****************************************************************
    getData: async (endPoint, token) => {
        const url = `${baseUrl}/${endPoint}`;
        // console.log(token, query, queryString, url);
        // console.log(url);
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer "+ token
                },
            });
            const json = await response.json();
            // console.log(json);
            return json;

        } catch (error) {
            // console.error(error);
            return error;
        }
    },

    // ****************************************************************
    putData: async (endPoint, data) => {
        const url = `${baseUrl}/${endPoint}`;
        // console.log(token, query, queryString, url);
        // console.log(url);
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            // console.log(json);
            return json;

        } catch (error) {
            // console.error(error);
            return error;
        }
    },

    // ****************************************************************
    postData: async (endPoint, data) => {
        const url = `${baseUrl}/${endPoint}`;
        // console.log(token, query, queryString, url);
        // console.log(url);
        // console.log(data);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            // console.log(json);
            return json;

        } catch (error) {
            // console.error(error);
            return error;
        }
    },

    // ****************************************************************
    delete: async (endPoint) => {
        const url = `${baseUrl}/${endPoint}`;
        // console.log(token, query, queryString, url);
        // console.log(url);
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
                },
            });
            const json = await response.json();
            // console.log(json);
            return json;

        } catch (error) {
            // console.error(error);
            return error;
        }
    },


}

export default apiFunctions;