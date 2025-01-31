import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import About from './pages/About';
import Navbar from './components/Navbar.jsx';
import Socials from './pages/Socials.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import Projects from './pages/Projects.jsx';
import BlogContent from './pages/BlogContent.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Navbar />
     

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog/content" element={<BlogContent />} />

        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App
