import React,{useState} from 'react';
import {navLinks} from '../utils/Constants';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.jpg';
import Sidebar from './Sidebar';
import {GrFacebook} from 'react-icons/gr';
import '../index.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTwitter} from 'react-icons/fa';
const Navbar = () => {
    const [isOpenSide,setIsOpenSide]=useState(false);
    const showSideBar=()=>
    {
        setIsOpenSide(true);
    }
    const enterSide=()=>
    {
        setIsOpenSide(false);
    }
    const classNom=(isOpenSide)? "sidebarIn":"sidebarOut";
    return (
        <>
            <div className="navbar">
                <div className='Logo'>
                    <img src={logo}/>
                </div>
                <div className='links'>
                    <ul className='links-ul'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/person">Create Person</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/error">Error</Link></li>
                    </ul>
                </div>
                <div className='social'>
                    <GrFacebook className="social-icon"/>
                    <FaTwitter className="social-icon"/>
                </div>
                <GiHamburgerMenu className="burger" onClick={showSideBar}/>
            </div>
            <Sidebar show={classNom} enterSide={enterSide}/>
        </>
    );
};

export default Navbar;