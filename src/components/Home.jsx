import React from 'react';
import products from './Profile';
import "../styles/profile.css";

const Home = () => {
    return (
        <div className="bg-slate-950 min-h-screen p-4 sm:p-6 lg:p-8">
            {/* Top Navigation with Create and Personal Portfolio */}
            <div className="flex justify-between mb-8">
                {/* Create Button - Left Aligned */}
                {/* <a
                    href="/create"
                    className="inline-block px-6 py-3 text-white border-4 border-slate-500 hover:text-blue-500 rounded-lg cursor-pointer"
                >
                    Create
                </a> */}

                {/* Personal Portfolio Button - Right Aligned */}
                <a
                    href="/portfolio"
                    className="inline-block px-6 py-3 text-white border-4 border-slate-500 hover:text-blue-500 rounded-lg cursor-pointer"
                >
                    Personal Portfolio
                </a>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-10">
                Insta NIT
            </h1>

            {/* Grid Container for Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((post) => (
                    <div key={post.id} className="flex flex-col items-center">
                        {/* Profile Image inside a Circular Box */}
                        <div className="relative w-32 h-32 rounded-full overflow-hidden">
                            <a href={`/user/${post.id}`} className="block">
                                <img
                                    src={post.image}
                                    alt={post.name}
                                    className="w-full h-full object-cover"
                                />
                            </a>
                        </div>

                        {/* Profile Info */}
                        <div className="mt-4 text-center text-white">
                            <h3 className="text-xl font-semibold">{post.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
