import React,{useState} from 'react';
import '../index.css';
import {AiOutlineMinus} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
const FAQ = () => {
    let [toggle1,setToggle1]=useState(false);
    let signe1=(toggle1)?<AiOutlineMinus/>:<AiOutlinePlus/>;
    let classToggle1=(toggle1)?"show-div":"hidden-div";
    let [toggle2,setToggle2]=useState(false);
    let signe2=(toggle2)?<AiOutlineMinus/>:<AiOutlinePlus/>;
    let classToggle2=(toggle2)?"show-div":"hidden-div";
    let [toggle3,setToggle3]=useState(false);
    let signe3=(toggle3)?<AiOutlineMinus/>:<AiOutlinePlus/>;
    let classToggle3=(toggle3)?"show-div":"hidden-div";
    let [toggle4,setToggle4]=useState(false);
    let signe4=(toggle4)?<AiOutlineMinus/>:<AiOutlinePlus/>;
    let classToggle4=(toggle4)?"show-div":"hidden-div";
    let [toggle5,setToggle5]=useState(false);
    let signe5=(toggle5)?<AiOutlineMinus/>:<AiOutlinePlus/>;
    let classToggle5=(toggle5)?"show-div":"hidden-div";
    return (
        <div className="container faq">
            <h1>FAQ:</h1>
            <div className="div-show" onClick={()=>{setToggle1(!toggle1)}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span>{signe1}</span></p>
            </div>
            <div className={"div-hidden "+classToggle1}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eu nulla imperdiet fermentum ac quis lectus. Nulla ultricies lacus ut risus semper, a ultricies lectus congue. Nulla et rutrum orci. Maecenas eget erat sit amet neque venenatis dapibus. Aenean dui metus, congue eget vehicula eu, iaculis at ligula.</p>
            </div>
            <div className="div-show" onClick={()=>{setToggle2(!toggle2)}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span>{signe2}</span></p>
            </div>
            <div className={"div-hidden "+classToggle2}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eu nulla imperdiet fermentum ac quis lectus. Nulla ultricies lacus ut risus semper, a ultricies lectus congue. Nulla et rutrum orci. Maecenas eget erat sit amet neque venenatis dapibus. Aenean dui metus, congue eget vehicula eu, iaculis at ligula.</p>
            </div>
            <div className="div-show" onClick={()=>{setToggle3(!toggle3)}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span>{signe3}</span></p>
            </div>
            <div className={"div-hidden "+classToggle3}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eu nulla imperdiet fermentum ac quis lectus. Nulla ultricies lacus ut risus semper, a ultricies lectus congue. Nulla et rutrum orci. Maecenas eget erat sit amet neque venenatis dapibus. Aenean dui metus, congue eget vehicula eu, iaculis at ligula.</p>
            </div>
            <div className="div-show" onClick={()=>{setToggle4(!toggle4)}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span>{signe4}</span></p>
            </div>
            <div className={"div-hidden "+classToggle4}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eu nulla imperdiet fermentum ac quis lectus. Nulla ultricies lacus ut risus semper, a ultricies lectus congue. Nulla et rutrum orci. Maecenas eget erat sit amet neque venenatis dapibus. Aenean dui metus, congue eget vehicula eu, iaculis at ligula.</p>
            </div>
            <div className="div-show" onClick={()=>{setToggle5(!toggle5)}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span>{signe5}</span></p>
            </div>
            <div className={"div-hidden "+classToggle5}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eu nulla imperdiet fermentum ac quis lectus. Nulla ultricies lacus ut risus semper, a ultricies lectus congue. Nulla et rutrum orci. Maecenas eget erat sit amet neque venenatis dapibus. Aenean dui metus, congue eget vehicula eu, iaculis at ligula.</p>
            </div>
        </div>
    );
};

export default FAQ;