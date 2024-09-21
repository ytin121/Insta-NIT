import * as React from "react";
import Navbar from "./page1/Navbar";
import PostKaiLinks from "./page1/PostKaiLinks";
import PostKiPhoto from "./page1/PostKiPhoto";
import { useState } from "react";
import Animate from "./page1/Animate";

const Post = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (event) => {
    setIsHovered(false);
  };

  return (
    <div id="intro">
      <div className="flex flex-col items-center self-stretch px-6 md:px-20 bg-slate-950 py-8 md:py-12 w-full max-md:px-5 max-md:max-w-full">

        {/* Navbar */}
        <Navbar />

        <div className="mt-12 md:mt-20 w-full max-w-[1201px] max-md:my-10 max-md:max-w-full">

          {/* Main Flex Container */}
          <div className="flex flex-col md:flex-row gap-5 max-md:gap-0">

            {/* Left Side - Text Section */}
            <div className="flex flex-col w-full md:w-6/12">
              <div className="text-section flex flex-col max-md:mt-10 max-md:max-w-full">

                <div className="text-3xl md:text-4xl font-extrabold text-white max-md:max-w-full">
                  Hello, it’s Me
                </div>

                <div className="mt-6 md:mt-9 text-5xl md:text-7xl font-extrabold text-white max-md:text-4xl">
                  {props.name}
                </div>

                <div className="mt-6 md:mt-11 text-2xl md:text-3xl font-extrabold text-white max-md:mt-10 max-md:max-w-full">
                  I'm a <Animate />
                </div>

                <div className="mt-8 md:mt-12 text-lg md:text-xl font-medium text-white max-md:mt-10 max-md:max-w-full">
                  {props.work}
                </div>

                {/* Social Links */}
                <PostKaiLinks
                  key={props.key}
                  linkdin={props.linkdin}
                  insta={props.insta}
                  gmail={props.gmail}
                  github={props.github}
                  twitter={props.twitter}
                />

                {/* Download CV */}
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`self-start mt-14 md:mt-28 ml-3 md:ml-7 text-2xl md:text-3xl font-semibold text-white whitespace-nowrap cursor-pointer hover:text-blue-400`}
                >
                  <a
                    href="https://docs.google.com/document/d/1Y0pcQIqXwS2_scrsr9qYvZDuxLl3taQW/edit?usp=drive_link&ouid=118080948833527748357&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Photo Section */}
            <PostKiPhoto key={props.key} src={props.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
