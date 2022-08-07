import React from 'react';
import PropTypes from 'prop-types';

UserData.propTypes = {
    
};

function UserData({user, ...props}) {
    return (
        <div>
            <ul>
                <li>
                    Name: {user.name}
                </li>
                <li>
                    Age: {user.age}
                </li>
                <li>
                    Address: {user.address}
                </li>
            </ul>
        </div>
    );
}

export default UserData;