import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalComponent from './ModalComponent';

ModalExample.propTypes = {
    
};

function ModalExample(props) {
    const [openModal, setOpenModal] = useState(false)
    const handleCloseModal = () => {
        setOpenModal(false);
    }
    return (
        <>
            <ModalComponent
                open={openModal}
                onClose={handleCloseModal}
            >
                <h1>Modal Content</h1>
            </ModalComponent>
            <button onClick={() => setOpenModal(true)}>Open modal</button>
        </>
    );
}

export default ModalExample;