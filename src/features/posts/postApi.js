import axios from "axios";

export const fetchPosts = async () => {
    try {
        const response = await axios.get("http://localhost:3000/posts");
        const data = await response.data;
        return data;
    } catch (error) {
        return error;
    }
};

export const storePostApi = async (newPost) => {
    try {
        const response = await axios.post(
            "http://localhost:3000/posts",
            newPost
        );
        const data = await response.data;
        return data;
    } catch (error) {
        return error;
    }
};

export const deletePostApi = async (id) => {
    try {
        const response = await axios.delete(
            `http://localhost:3000/posts/${id}`
        );
        const data = await response.data;
        return data;
    } catch (error) {
        return error;
    }
};
