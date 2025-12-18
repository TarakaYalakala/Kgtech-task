import { api } from "./api";

export const GetNewsdata = async (page?: string) => {
    try {
        const response = await api.get('/latest', {
            params: {
                apikey: import.meta.env.VITE_API_KEY,
                q: "nepal",
                language: "en",
                ...(page && { page: page })
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}