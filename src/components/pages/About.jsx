import React from 'react';
import Photo from './page1/Photo';
import AboutInfo from './page2/AboutInfo';
const About = () => {
  return (<div id="about">
<div className="self-stretch px-20 py-12 mt-4 w-full bg-zinc-700 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <Photo/>
          <AboutInfo/>
        </div>
      </div>
      </div>
  );
}

export default About;
