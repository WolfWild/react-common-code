import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

ModalComponent.propTypes = {
    onClose: PropTypes.func.isRequired,
};

function ModalComponent({children, open, onClose}) {
    const handleCloseModal = () => {
        onClose();
    }
    return (
        < >
            {open && (
                <div className="modal">
                    <div className="modal__main" onClick={handleCloseModal}>
                        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                            {children}
                            <button onClick={handleCloseModal}>hide modal</button>
                        </div>
                    </div>
                </div>
            )}   
        </>
    );
}

export default ModalComponent;