import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="flex gap-5 justify-between pr-2.5 w-full text-white whitespace-nowrap max-w-[1201px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto text-2xl font-bold tracking-wider">
        portfolio
      </div>
      <div className="flex gap-10 justify-between self-start text-xl font-medium tracking-wide max-md:flex-wrap max-md:max-w-full">
        <ScrollLink
          to="intro"
          spy={true}
          smooth={true}
          // offset={-70}
          duration={100}
          className="cursor-pointer hover:text-blue-500"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
          className="cursor-pointer hover:text-blue-500"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="services"
          spy={true}
          smooth={true}
          // offset={16}
          duration={600}
          className="cursor-pointer hover:text-blue-500"
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={80}
          duration={700}
          className="cursor-pointer hover:text-blue-500"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={70}
          duration={800}
          className="cursor-pointer hover:text-blue-500"
        >
          Contact
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;


