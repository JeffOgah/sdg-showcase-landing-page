import React from 'react';
import AllProjectItem from './AllProjectsItem';

export default function AllProjectsList({allProjects}) {
    console.log(allProjects);

    const renderedList = allProjects.map((project) => (
       <AllProjectItem al />
    ))
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
