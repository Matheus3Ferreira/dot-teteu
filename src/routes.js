import {Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import Home from './pages/Home/index';
import Projects from './pages/Projects';

 
 
export default function RouterComponent(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />}/>
            <Route path="/projects" element={<Projects />}/>
        </Routes>

    );
}