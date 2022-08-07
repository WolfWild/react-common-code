import React from 'react';
import PropTypes from 'prop-types';
import { withUser } from './WithUser';
import UserData from './UserData';

const UserInfoWithLoader = withUser(UserData, '234');

function LoadDataExamle(props) {
    return (
        <UserInfoWithLoader/>
    );
}

export default LoadDataExamle;