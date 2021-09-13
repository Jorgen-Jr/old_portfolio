import React from 'react';

import './style.css';

import logo from '../../../assets/image/logo.png';

import email from '../../../assets/Icons/email.png';
import home from '../../../assets/Icons/home.png';
import link from '../../../assets/Icons/link.png';
import settings from '../../../assets/Icons/settings.png';
import user from '../../../assets/Icons/user.png';

import github from '../../../assets/social/github.png';
import linkedn from '../../../assets/social/linkedn.png';

import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="sidebar-container">
            <div className="sidebar-logo">
                <img src={logo} alt="Logomarca" />
                <span>Jorge N</span>
            </div>
            <div className="menu-btn-group">
                <Link to="/" className="menu-btn">
                    <img src={home} alt="Início" />
                </Link>
                <Link to="/Portfolio" className="menu-btn">
                    <img src={link} alt="" />
                </Link>
                <Link to="/Habilidades" className="menu-btn">
                    <img src={settings} alt="" />
                </Link>
                <Link to="/Sobre" className="menu-btn">
                    <img src={user} alt="" />
                </Link>
                <Link to="/Contato" className="menu-btn">
                    <img src={email} alt="" />
                </Link>
            </div>
            <div className="social-btn-group">
                <a href="https://github.com/Jorgen-Jr/" target="_BLANK" rel="noopener noreferrer">
                    <img src={github} alt="" />
                </a>
                <a href="https://github/Jorgen-Jr/">
                    <img src={linkedn} alt="" />
                </a>
                <Link>
                    <img src={email} alt="" />
                </Link>
            </div>
        </div>
    );
}
export default Sidebar;