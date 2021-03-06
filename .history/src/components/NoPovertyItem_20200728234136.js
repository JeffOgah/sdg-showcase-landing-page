import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { NoPovertyModalContext } from '../contexts/ModalContext';

export default function NoPovertyItem({ project, onProjectSelect }) {
    

    let { setNoPovertyModal } = useContext();
    
    const onShowPovertyModal = () => {
        // setNoPovertyModal(true);
    }



    return (
        <div className=" project-card rounded py-3 px-3" data-aos="fade">
            <Link onClick={onShowPovertyModal} to="/" style={{ color: project.color }} className="project-name">{project.name}</Link>
            <p className="mt-3">{project.headline} </p>
        </div>
    )
}
