import axios from "axios";

export const fetchPosts = async () => {
    try {
        const response = await axios.get("http://localhost:3000/posts");
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};
