import React from 'react';
import PropTypes from 'prop-types';

ListComponent.propTypes = {
    
};
function ListComponent({items, itemComponent: ItemComponent}) {
    return (
        <>
            {
                items.map((item, index) => (
                    <ItemComponent key={index}  item={item}/>
                ))
            }   
        </>
    );
}

export default ListComponent;