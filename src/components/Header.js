import React from 'react';
import {  NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
    return (
        <form className="Header">
            <NavLink exact to="/" className="item" activeClassName="active">Main</NavLink>
            <NavLink to="/question" className="item" activeClassName="active">Question</NavLink>
            <NavLink to="/result" className="item" activeClassName="active">Result</NavLink>
        </form>
    );
}

export default Header;
