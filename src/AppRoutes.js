import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import { Index } from './Pages/Index'

export const AppRoutes = () =>{
    return (
    <Routes>
        <Route path='/bgcolor' element={<BackgroundColorChanger />}/>
        <Route path='/a ' element={<Index />}/>
        
    </Routes>
    )
}
