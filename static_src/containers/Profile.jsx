import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import { Link } from 'react-router-dom';
import connect from "react-redux/lib/connect/connect";


class Profile extends React.Component {
    static propTypes = {
        userData: PropTypes.object.isRequired,
    };
    render() {
        const { userData } = this.props;

        return (
            <div className="profile">
                 <h1>Профиль</h1>
                <div>{userData.name}</div>
                <div>{userData.email}</div>
                <div>{userData.phone}</div>
                <Link to='/'> ← Назад</Link>
            </div>
        )
    }
}
const mapStateToProps = ({profileReducer}) => ({
    userData: profileReducer.userData,
});

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);