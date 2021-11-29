import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
            <footer>
                <h2>Crea games</h2>
                <div>
                    <div>
                        <ul>
                            <li><Link to="">About us</Link></li>
                            <li><Link to="">Aim</Link></li>
                            <li><Link to="">Vision</Link></li>
                            <li><Link to="">Testimonials</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="">Services</Link></li>
                            <li><Link to="">swriting</Link></li>
                            <li><Link to="">Interchips</Link></li>
                            <li><Link to="">Coding</Link></li>
                            <li><Link to="">Teaching</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="">Contact us</Link></li>
                            <li><Link to="">writing</Link></li>
                            <li><Link to="">Interchips</Link></li>
                            <li><Link to="">Coding</Link></li>
                            <li><Link to="">Teaching</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="">Social Media</Link></li>
                            <li><Link to="">Facebook</Link></li>
                            <li><Link to="">Instagram</Link></li>
                            <li><Link to="">Twitter</Link></li>
                            <li><Link to="">Youtube</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;