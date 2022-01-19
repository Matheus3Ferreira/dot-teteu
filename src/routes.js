import {Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import Home from './pages/Home/index';

 
 
export default function RouterComponent(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />}/>
        </Routes>

    );
}