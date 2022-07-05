import React from 'react';
import './Party.css';

function Party({title,content})
{
    return (
        <div className='Party'>
            <h3>{title}</h3>
            <ol>
                {
                    content.map((anObjectMapped,index) => {
                        return (
                            <li>{anObjectMapped.nome} | {anObjectMapped.contato}</li>
                        );
                    })
                }
            </ol>
        </div>
    )
}

export default Party;