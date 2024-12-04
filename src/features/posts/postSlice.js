import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deletePostApi, fetchPosts, storePostApi } from "./postApi";

const initialState = {
    posts: [],
    isLoading: true,
    isError: false,
    error: null,
    edit: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const posts = await fetchPosts();
    return posts;
});

export const storePost = createAsyncThunk(
    "posts/storePost",
    async (newPost) => {
        const post = await storePostApi(newPost);
        return post;
    }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
    const post = await deletePostApi(id);
    return post.id;
});

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,

    extraReducers: (builder) => {
        const pendingCase = (state) => {
            state.isError = false;
            state.isLoading = true;
        };

        const rejectedCase = (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        };

        builder
            .addCase(getPosts.pending, (state) => pendingCase(state))
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) =>
                rejectedCase(state, action)
            );

        builder
            .addCase(storePost.pending, (state) => pendingCase(state))

            .addCase(storePost.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.status == 404) {
                    // state.isError = true;
                    state.error = action.payload?.message;
                } else {
                    state.posts.push(action.payload);
                }
            })
            .addCase(storePost.rejected, (state, action) =>
                rejectedCase(state, action)
            );

        builder
            .addCase(deletePost.pending, (state) => pendingCase(state))

            .addCase(deletePost.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.status == 404) {
                    state.error = action.payload?.message;
                } else {
                    // const updatePosts = state.posts.filter(
                    //     (post) => post.id != action.payload
                    // );

                    // state.posts = updatePosts;

                    const findPostIndex = state.posts.findIndex(
                        (post) => post.id == action.payload
                    );

                    // state.posts[findPostIndex].title = action.payload;
                    // state.posts.splice(findPostIndex, 1, action.payload);

                    state.posts.splice(findPostIndex, 1);
                }
            })
            .addCase(deletePost.rejected, (state, action) =>
                rejectedCase(state, action)
            );
    },
});

export default postsSlice.reducer;
