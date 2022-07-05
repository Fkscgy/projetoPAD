import React from 'react';
import './Info.css';

function Info({title,content})
{
    return (
        <div className='Info'>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Info;