
import React from 'react';
import {Link} from "react-router-dom";

export default class Profile extends React.Component {

    render() {
        return (
            <div>
            <h1>User's profile</h1>
            <Link to={ '/' }>Back</Link>
            </div>
        )
    }
}