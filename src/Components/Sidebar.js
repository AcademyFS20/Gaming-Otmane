import React from 'react';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import '../index.css';
const Sidebar = (props) => {
    return (
            <div className={'sidebar '+props.show}>
                <h1>This is a Sidebary</h1>
                <ul>
                    <li><Link to="/" onClick={props.enterSide}>Home</Link></li>
                    <li><Link to="/about" onClick={props.enterSide}>About us</Link></li>
                    <li><Link to="/person" onClick={props.enterSide}>Create Person</Link></li>
                    <li><Link to="/faq" onClick={props.enterSide}>FAQ</Link></li>
                    <li><Link to="/error" onClick={props.enterSide}>Error</Link></li>
                </ul>
                <AiOutlineClose className="close-icon" onClick={props.enterSide}/>
            </div>
    );
};
// onClick={props.enterSide(false)

export default Sidebar;