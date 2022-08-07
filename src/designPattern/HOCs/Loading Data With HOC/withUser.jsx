import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const withUser = (Component, userId) => {
    return (props) => {
        const [user, setUser] = useState(null);
        useEffect(() => {
            (async () => {
                const response = await fetch(`google.com/${userId}`);
                setUser(response);
            })()
        },[])
        return <Component {...props} user={user}/>
    }
}