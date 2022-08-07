import React from 'react';
import PropTypes from 'prop-types';
import LayoutComponent from './LayoutComponent';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
LayoutExample.propTypes = {
    
};

function LayoutExample(props) {
    return (
        <div>
            <LayoutComponent leftWidth={300} rightWidth={700}>
                <LeftComponent>
                    <h1>Left Content</h1>
                </LeftComponent>
                <RightComponent>
                    <h1>Right Content</h1>
                </RightComponent>
            </LayoutComponent>
        </div>
    );
}

export default LayoutExample;