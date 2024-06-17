import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from "./components/Portfolio"
import About from './components/pages/About';
import Services from './components/pages/Services';
import ContactsUs from './components/pages/ContactsUs';
import Projects from './components/pages/Projects';
import Post from './components/pages/Post';
import image from '../public/images/372497208215303 (2).png';
function Personal() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/intro" element={<Post name="Yatin"
          id="e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
          image={image}
          work="i am a Computer Science and Engineering student at
          NIT Hamirpur . I am passionate to learn new technology
          which will make me one step toward my goals"
          linkdin="https://in.linkedin.com/in/yatin-b7a952296"
          insta="https://www.instagram.com/_yatin.8t35"
          gmail="25yatin26@gmail.com"
          github="https//github.com/ytin121" />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/services" element={<Services />} />
        <Route path="/portfolio/contact" element={<ContactsUs />} />

      </Routes>

    </Router>
  );
}

export default Personal;