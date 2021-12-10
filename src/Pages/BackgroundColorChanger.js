import React from 'react';
import { useParams } from 'react-router-dom';

export const BackgroundColorChanger = () =>{
    const prop = useParams()
    console.log(prop)
    return(
        <div>Background Color Change</div>
    )
}