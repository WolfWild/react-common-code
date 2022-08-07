import React from 'react';
import PropTypes from 'prop-types';

LayoutComponent.propTypes = {
    
};

function LayoutComponent({children, leftWidth, rightWidth}) {
    const [leftContent, rightContent] = children;
    return (
        <div className='layout'>
            <div className="layout__left">
                {leftContent}
            </div>
            <div className="layout__right">
                {rightContent}
            </div>
        </div>
    );
}

export default LayoutComponent;