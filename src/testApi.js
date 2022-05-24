import axios from "axios";

const baseURL = "/api/test";
const client = axios.create({ baseURL });

const testApi = {
	getTest: async () => {
		try {
			const response = await client.get("/");
			return response.data;
		} catch (error) {
			return error.response;
		}
	},
};

export default testApi;
