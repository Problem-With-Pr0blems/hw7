import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../redux/commentsSlice';

const PostPage = () => {
    const { postId } = useParams();
    const [commentText, setCommentText] = useState('');
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.comments);
    const status = useSelector((state) => state.comments.status);
    const error = useSelector((state) => state.comments.error);

    const handleChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment({ postId, comment: commentText }));
        setCommentText('');
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    } else if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Comments for Post {postId}</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.body}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <textarea value={commentText} onChange={handleChange} />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default PostPage;
