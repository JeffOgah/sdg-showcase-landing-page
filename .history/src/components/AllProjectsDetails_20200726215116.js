import React, {useContext} from 'react';
import '../App.scss';
import { ModalContext } from '../contexts/ModalContext';
import ReactPlayer from 'react-player';
import { ProjectContext } from '../contexts/context';



export default function AllProjectsDetails({ allProject }) {
    
    let { showModal, setShowModal } = useContext(ModalContext);
    console.log(showModal + 'from detail');


    if(!)

    return (
        <div>
            {allProject.name}
        </div>
    )
}
