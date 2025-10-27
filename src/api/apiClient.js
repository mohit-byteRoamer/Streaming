
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const apiClient = async (endpoint, method = "GET", headers = {}, body = null) => {
    try {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        };

        if (body) options.body = JSON.stringify(body);

        const response = await fetch(`${BASE_URL}${endpoint}`, options);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Something went wrong");
        }

        return await response.json();
    } catch (error) {
        console.error("API Error:", error.message);
        throw error;
    }
};
