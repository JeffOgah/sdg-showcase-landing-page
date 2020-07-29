import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { PatnershipModalContext } from '../contexts/ModalContext';


export default function PatnershipItem({ project, onProjectSelect}) {
    

    let { setPatnerModal } = useContext(PatnershipModalContext);
    
     const onShowPovertyModal = () => {
        onProjectSelect(project);
        // console.log(project);
         setPatnerModal(true);

    }
    
    return (
        <div className=" project-card rounded py-3 px-3" data-aos="fade">
            <Link  style={{ color: project.color }} className="project-name">{project.name}</Link>
            <p className="mt-3">{project.headline} </p>
        </div>
    )
}
