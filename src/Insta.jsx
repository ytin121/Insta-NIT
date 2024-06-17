import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import products from './components/Profile';
import Post from "./components/pages/Post";
function Insta() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {products.map(post => (
                    <Route path={`/user/${post.id}`}
                        element={<Post
                            key={post.id}
                            id={post.id}
                            name={post.name}
                            image={post.image}
                            work={post.work}
                            linkdin={post.linkdin}
                            insta={post.insta}
                            gmail={post.gmail}
                            github={post.github}
                            twitter={post.twitter}
                        />} />

                ))}
            </Routes>

        </Router>
    );
}

export default Insta;