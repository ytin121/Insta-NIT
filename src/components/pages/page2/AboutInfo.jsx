import React from 'react'

const AboutInfo = () => {
  return (
    <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto font-semibold text-white max-md:mt-10 max-md:max-w-full">
        <div className="text-5xl text-cyan-400 max-md:max-w-full max-md:text-4xl">
          <span className="font-bold">About </span>
          <span className="font-bold text-cyan-400">Me</span>
        </div>
        <div className="mt-2 text-2xl max-md:max-w-full">
          Full Stack Web Developer
        </div>
        <div className="mt-8 text-xl font-medium max-md:max-w-full">
          i am a Computer Science and Engineering student at <br />
          NIT Hamirpur . I am passionate to learn new technolgy
          <br />
          which will make me one step toward my goals <br />i am a
          Computer Science and Engineering student at <br />
          NIT Hamirpur . I am passionate to learn new technolgy
          <br />
          which will make me one step toward my goals
          <br />i am a Computer Science and Engineering student at <br />
          NIT Hamirpur . I am passionate to learn new technolgy
          <br />
          which will make me one step toward my goals
        </div>
        <div className="self-start mt-20 ml-4 text-3xl whitespace-nowrap  hover:text-indigo-400 cursor-pointer max-md:mt-10 max-md:ml-2.5">
          See More
        </div>
      </div>
    </div>
  )
}

export default AboutInfo;
