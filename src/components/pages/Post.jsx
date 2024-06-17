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
      <div className="flex flex-col items-center self-stretch px-20 bg-slate-950 py-12 w-full  max-md:px-5 max-md:max-w-full">

        <Navbar />

        <div className="mt-20  w-full max-w-[1201px] max-md:my-10 max-md:max-w-full">

          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-extrabold text-white max-md:max-w-full">
                  Hello it’s Me
                </div>
                <div className="mt-9 text-7xl font-extrabold text-white max-md:max-w-full max-md:text-4xl">
                  {props.name}
                </div>
                <div className=" flex mt-11 text-3xl font-extrabold text-white max-md:mt-10 max-md:max-w-full">
                  I'm a <Animate />
                </div>
                <div className="mt-12 text-xl font-medium text-white max-md:mt-10 max-md:max-w-full">
                  {props.work}
                </div>
                <PostKaiLinks key={props.key}
                  linkdin={props.linkdin}
                  insta={props.insta}
                  gmail={props.gmail}
                  github={props.github}
                  twitter={props.twitter} />
                <div onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} className={`self-start mt-28 ml-7 text-3xl font-semibold text-white whitespace-nowrap max-md:mt-10 max-md:ml-2.5 cursor-pointer hover:text-blue-400`}
                >
                  <a href="https://drive.google.com/file/d/1oCpQViogEcd10khGNt46QW79mxJF422s/view?usp=drive_link" target="_blank">Download CV</a>

                </div>
              </div>
            </div>
            <PostKiPhoto key={props.key} src={props.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
