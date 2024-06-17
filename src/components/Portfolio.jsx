import * as React from "react";
import Post from "./pages/Post";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ContactsUs from "./pages/ContactsUs";
import myImage from "/images/372497208215303 (2).png";
function Portfolio() {
  return (

    <div className="flex flex-col items-center pb-12 bg-slate-950">

      <Post name="Yatin"
        id="e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
        image={myImage}
        work="i am a Computer Science and Engineering student at
          NIT Hamirpur . I am passionate to learn new technology
          which will make me one step toward my goals"
        linkdin="https://in.linkedin.com/in/yatin-b7a952296"
        insta="https://www.instagram.com/_yatin.8t35"
        github="https//github.com/ytin121"
        gmail="25yatin26@gmail.com"
        twitter="https://x.com/_yatin8t35"
      />
      <About />
      <Services />
      <Projects />
      <ContactsUs />
    </div>
  );
}
export default Portfolio;

