import React from 'react'
import myImage from "/images/372497208215303 (2).png";
const Photo = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={myImage}
        className="grow mt-3 w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
      />

    </div>
  )
}

export default Photo;
