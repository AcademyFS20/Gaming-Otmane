import React, { Component } from 'react';
import '../index.css';
import {GiArcher} from 'react-icons/gi';
import {GiBroadsword} from 'react-icons/gi';
import {GiSpinningSword} from 'react-icons/gi';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
// let imageName = require('../assets/doc.png');
class Home extends Component {
    render() {
        return (
            <div>
                <section id="section1">
                    <h1>Discover More</h1>
                    <h2>We have released new personnage, check it out</h2>
                    <button type="button">Discorer</button>
                </section>
                <section id="section2"> 
                    <h3>Our custom players</h3>
                    {/* <img src={require('../assets/persos/avatars/avatar1.png').default}/> */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar1.png').default}
                            alt="First slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar2.png').default}
                            alt="Second slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar3.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar4.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar5.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar6.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar7.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar8.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar9.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar10.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar11.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block"
                            src={require('../assets/persos/avatars/avatar12.png').default}
                            alt="Third slide" width={30} heigth={30}
                            />
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section id="section3">
                    
                    <div className="container">
                        <div id="first-div">
                            <h3>Custom art for you</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in erat sed nisi fringilla iaculis a et nulla. Aenean vel mi sit amet tellus ullamcorper molestie. Curabitur congue consequat fermentum. Nam volutpat nulla dui, non dignissim sapien volutpat et. Suspendisse interdum lorem ac nisl dignissim tempus</p>
                        </div>
                        <div id="second-div">
                            <div>
                                <div className='icon'>
                                    <GiSpinningSword/>
                                </div>
                                <h3>The arche</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in erat sed nisi fringilla iaculis a et nulla. Aenean vel mi sit amet tellus ullamcorper molestie. Curabitur congue consequat fermentum. Nam volutpat nulla dui, non dignissim sapien volutpat et. Suspendisse interdum lorem ac nisl dignissim tempus. Aliquam semper nulla eu erat gravida rutrum.</p>
                            </div>
                            <div>
                                <div className='icon'>
                                    <GiBroadsword/>
                                </div>
                                <h3>The sword</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in erat sed nisi fringilla iaculis a et nulla. Aenean vel mi sit amet tellus ullamcorper molestie. Curabitur congue consequat fermentum. Nam volutpat nulla dui, non dignissim sapien volutpat et. Suspendisse interdum lorem ac nisl dignissim tempus. Aliquam semper nulla eu erat gravida rutrum.</p>
                            </div>
                            <div>
                                <div className='icon'>
                                    <GiArcher/>
                                </div>
                                <h3>Fleau</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in erat sed nisi fringilla iaculis a et nulla. Aenean vel mi sit amet tellus ullamcorper molestie. Curabitur congue consequat fermentum. Nam volutpat nulla dui, non dignissim sapien volutpat et. Suspendisse interdum lorem ac nisl dignissim tempus. Aliquam semper nulla eu erat gravida rutrum.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section4">
                    <div className="container">
                        <div className="section4__div1">
                            <h4>Join us and get some tips</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in erat sed nisi fringilla iaculis a et nulla. Aenean vel mi sit amet tellus ullamcorper molestie.</p>
                        </div>
                        <div className="section4__div2">
                            <input type="email" size="20%" placeholder="enter email"/>
                            <button type="submit" className="btn btn-warning">validate</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;