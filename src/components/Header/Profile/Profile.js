import React from 'react';
import Styles from './Profile.module.scss';
import FAIcons from "./../../../globals/font-awesome-4.7.0/css/font-awesome.min.css"
const Profile = () => {
    return (
        <div className={Styles.profile}>
            <div className={Styles.profile__icon}>
                <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default Profile;