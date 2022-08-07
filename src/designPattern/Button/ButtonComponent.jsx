import React from 'react';
import PropTypes from 'prop-types';

export const applyComponent = (Component, partialProp) => {
    return (props) => {
        return <Component {...partialProp} {...props}/>
    }
}

export function Button({variant, color, text, ...props}) {
    return (
        <button className={`${variant ? 'btn-outline' : 'btn-inline'} ${color ? color : ''}`}
        >
            {text}
        </button>
    );
}


export function DangerButton(props) {
    return (
        <Button
            {...props}
        />
    )
}

export const BigButton = applyComponent(Button, { color:"red", variant:"outlined", text: "Big Button" });