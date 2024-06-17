import * as React from "react";
import { useState } from "react";
function addClass() {

}
const PostKaiLinks = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (event) => {
        const icon = event.currentTarget.querySelector(".ci");
        if (icon) {
            icon.style.transform = "scale(1.1)";
            icon.style.backdropFilter = "blur(10px)";
        }
        setIsHovered(true);
    };

    const handleMouseLeave = (event) => {
        const icon = event.currentTarget.querySelector(".ci");
        if (icon) {
            icon.style.transform = "scale(1)";
            icon.style.backdropFilter = "none"; // Adjust the blur value as needed
        }
        setIsHovered(false);
    };
    let ico = `mailto:${props.gmail}?subject=Hello&body=Hi%20there,`;

    return (
        <div loading="lazy" className="flex gap-5 justify-between items-start pr-20 mt-9 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <a href={props.linkdin} target="_blank" onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="flex justify-center items-center px-2 w-12 h-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10 ">
                    <i className="ci ci-linkedin ci-3x w-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10"></i>

                </div>
            </a>

            <a href={props.insta} target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="flex justify-center items-center px-2 w-12 h-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10">
                    <i loading="lazy" className="ci ci-instagram ci-3x w-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10"></i>
                </div>
            </a>
            <a href={props.github} target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="flex justify-center items-center px-2 w-12 h-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10">

                    <i className="ci ci-github ci-3x w-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10" loading="lazy"></i>
                </div>
            </a>
            <a href={ico} target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="flex justify-center items-center px-2 w-12 h-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10">

                    <i className="ci ci-gmail ci-3x w-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10" loading="lazy"></i>
                </div>
            </a>

            <a href={props.twitter} target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className="flex justify-center items-center px-2 w-12 h-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10">

                    <i className="ci ci-twitter ci-3x w-12 rounded-xl border-solid shadow-lg aspect-square backdrop-blur-[10px] border-[0.8px] border-zinc-300 border-opacity-10" loading="lazy"></i>
                </div>
            </a>
        </div >

    )
}

export default PostKaiLinks;
