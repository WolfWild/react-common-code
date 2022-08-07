import React from 'react';
import PropTypes from 'prop-types';

ItemLargeComponent.propTypes = {
    
};

function ItemLargeComponent({item}) {
    const {name, age, address} = item;
    return (
        <div>
            <p>Name: {name}, Age: {age}, Address: {address}</p>
        </div>
    );
}

export default ItemLargeComponent;