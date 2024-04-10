import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addComment = createAsyncThunk('comments/addComment', async ({ postId, comment }) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/comments', {
        postId,
        body: comment,
    });
    return response.data;
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addComment.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments.push(action.payload);
            })
            .addCase(addComment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default commentsSlice.reducer;
