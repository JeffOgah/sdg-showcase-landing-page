import React from 'react';
import ZeroHungerItem from './ZeroHungerItem';
import 




export default function ZeroHungerList({projects}) {
    
    const renderedList = projects.map(project => (
        <NoPovertyItem project={project} />
    ))

    return (
        <div className="project-card-container">
            {renderedList}
        </div>
    )
}
