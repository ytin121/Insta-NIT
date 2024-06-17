import React, { useState } from 'react';
import products from './Profile';
import "../styles/profile.css";
const Home = () => {

    return (
        <div className="bg-slate-950">
            <div className='createOwn'>
                <a href="/portfolio"
                    className="cursor-pointer hover:text-blue-500 border-4 border-slate-500"
                >Personal Portfolio</a>


            </div>
            <h1 className='heading' >Insta NIT</h1>
            <div className='grid-container'>
                {products.map(post => (

                    <div key={post.id}>
                        <div className='profile-image-container hover:opacity-50 ' >
                            <a href={`/user/${post.id}`}>

                                <img src={post.image} alt={post.name} className='z-0' />
                            </a>

                        </div>
                        <div className="profile-info z-10 text-slate-950">
                            <h3>{post.name}</h3>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Home;




