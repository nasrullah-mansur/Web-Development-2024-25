import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postApi";

const initialState = {
    posts: [],
    isLoading: true,
    isError: false,
    error: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const posts = await fetchPosts();
    return posts;
});

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default postsSlice.reducer;
