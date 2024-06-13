import React from 'react'
import {Routes, Route } from "react-router-dom";
import {MusicBands} from '../pages/musicbands';
import {Animals} from '../pages/animals';
import Home from '../pages/home';
import About from '../pages/about';
import {BandView} from '../pages/bandview';


export function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/musicbands' element={<MusicBands/>}></Route>
        <Route path='/animals/:name/:type/:age' element={<Animals/>}></Route>
        <Route path='/bandview/:id' element={<BandView/>}></Route>
    </Routes>
  )
}
