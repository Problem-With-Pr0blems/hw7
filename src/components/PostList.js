import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom
import { fetchPosts } from '../redux/postsSlice';

function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link> {/* Ссылка на страницу поста */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
