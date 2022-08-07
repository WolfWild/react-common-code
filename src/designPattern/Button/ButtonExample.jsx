import React from 'react';
import PropTypes from 'prop-types';
import { BigButton, Button, DangerButton } from './ButtonComponent';

ButtonExample.propTypes = {
    
};

function ButtonExample(props) {
    return (
        <div>
            <Button
                color="red"
                variant="outlined"
                text="Button Text"
            />
            <DangerButton
                text="Danger Button"
            />
            <BigButton/>
        </div>
    );
}

export default ButtonExample;