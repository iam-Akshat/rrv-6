import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoutes } from '../AppRoutes';
import { BackgroundColorChanger } from '../Pages/BackgroundColorChanger';
import { Index } from '../Pages/Index';

import '../styles/App.css';
const App = () => {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/bgcolor' element={<BackgroundColorChanger />}/>
        <Route path='/a ' element={<Index />}/>
        
    </Routes>
    </BrowserRouter>

  )
}


export default App;
