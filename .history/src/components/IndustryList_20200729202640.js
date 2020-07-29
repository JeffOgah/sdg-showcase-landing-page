import React from 'react';
import IndustryItem from './IndustryItem';



export default function IndustryList({ projects, onProjectSelect }) {
    const renderedList = projects.map((project,i) => (
        <IndustryItem onProjectSelect={onProjectSelect} key={i} project={project} />
    ))
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
