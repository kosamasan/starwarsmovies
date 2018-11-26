import React from 'react';
import './Logo.css';

import logoImg from '../../assets/images/logo.png';

const logo = () => (
        <div className='logo'>
                <img src={logoImg} alt="logo" />
        </div>
);

export default logo;