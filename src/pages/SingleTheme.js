import React, { Component, useState, useContext} from 'react';
import { ProjectContext } from '../contexts/context';
import '../App.scss'
import {Link} from 'react-router-dom'
import { ModalContext } from '../contexts/ModalContext';



const  SingleTheme  = (props) =>  {
  

    const[theme, setTheme] = useState(props.match.params.theme)
    let [selectedProject, setSelectedProject] = useState(null);

        
    const { getTheme } = useContext(ProjectContext);

    
        
        const projectTheme = getTheme(theme);
        console.log(projectTheme);

       
    
        const onThemeSelect = (theme) => {
            console.log(theme + 'from the singletheme')
        }
       

        const renderedTheme = projectTheme.map(project => {
            return (
                <div className=" project-card rounded py-3 px-3">
                    <Link onClick={onThemeSelect(project)} to="" style={{ color: project.color }} className="project-name">{project.name}</Link>
                    <p className="mt-3">{project.headline} </p>
                </div>   
            )
        })

        return (
                <div>
                    Single theme{renderedTheme}
                </div>
            
        )
    }

export default SingleTheme;