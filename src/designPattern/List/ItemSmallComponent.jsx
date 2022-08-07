import React from 'react';
import PropTypes from 'prop-types';

ItemSmallComponent.propTypes = {
    
};

function ItemSmallComponent({item}) {
    const {name} = item;
    return (
        <div>
            <p>Name: {name}</p>
        </div>
    );
}

export default ItemSmallComponent;