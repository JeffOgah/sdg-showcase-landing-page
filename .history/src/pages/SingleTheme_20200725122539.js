import React, { Component, useState, useContext} from 'react';
import { ProjectContext } from '../contexts/context';
import '../App.scss'
import {Link} from 'react-router-dom'
import { ModalContext } from '../contexts/ModalContext';



const  SingleTheme  = (props) =>  {
  

    const[theme, setTheme] = useState(props.match.params.theme)

        
    const { getTheme } = useContext(ProjectContext);
    // const { showModal } = useContext(ModalContext)
    // console.log(showModal);
    console.log(ModalContext)
        
        const projectTheme = getTheme(theme);
        console.log(projectTheme);

        if(!projectTheme){
            return <div>
                <h3>No such room could be found</h3>
            </div>
        }
       

        const renderedTheme = projectTheme.map(project => {
            return (
                <div className=" project-card rounded py-3 px-3" data-aos="fade">
                    <Link  to="/" style={{ color: project.color }} className="project-name">{project.name}</Link>
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