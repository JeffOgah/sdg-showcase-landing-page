import React, { useContext } from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { NoPovertyModalContext } from '../contexts/ModalContext';

const NoPovertyDetail = ({project}) => {
    
    let { noPovertyModal, setNoPovertyModal } = useContext(NoPovert)

    return (
        <div>
            NoPovertyDetail
        </div>
    )
}

export default NoPovertyDetail