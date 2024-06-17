import React from 'react'
const PostKiPhoto = (props) => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full border-none">
    <img
      loading="lazy"
      src={props.src}
      className="grow mt-3 w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
    />
    
  </div>
  )
}

export default PostKiPhoto;
