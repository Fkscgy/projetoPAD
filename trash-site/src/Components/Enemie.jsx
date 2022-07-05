import React from 'react';
import './Enemie.css';

function Enemie({title,content,imageRef,alt})
{
    return (
        <div className='Enemie'>
            <h3>{title}</h3>
            <p>{content}</p>
            <img src={imageRef} alt={alt}></img>
        </div>
    )
}

export default Enemie;