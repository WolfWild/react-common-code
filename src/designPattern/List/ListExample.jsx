import React from 'react';
import PropTypes from 'prop-types';
import ListComponent from './ListComponent';
import ItemSmallComponent from './ItemSmallComponent';
import ItemLargeComponent from './ItemLargeComponent';
ListExample.propTypes = {
    
};
const persons = [
    {
        name: 'Nguyen',
        age: 20,
        address: 'HCM'
    },
    {
        name: 'Thi',
        age: 21,
        address: 'DL'
    },
    {
        name: 'Ngoc',
        age: 22,
        address: 'HN'
    },
    {
        name: 'My',
        age: 23,
        address: 'ST'
    },
]
function ListExample(props) {
    return (
        <>
            <ListComponent
                items={persons}
                itemComponent={ItemSmallComponent}
            />
            <ListComponent
                items={persons}
                itemComponent={ItemLargeComponent}
            />
        </>
    );
}

export default ListExample;