import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostPage from './components/PostPage';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/posts/:postId" element={<PostPage />} /> {/* Маршрут для страницы поста */}
                    <Route path="/" element={<PostList />} /> {/* Маршрут для списка постов */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
