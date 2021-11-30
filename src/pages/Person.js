import React,{useReducer,useState} from 'react';
import {GrFormPreviousLink} from 'react-icons/gr';
import {GrFormNextLink} from 'react-icons/gr';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {ImPower} from 'react-icons/im';
import {ImMan} from 'react-icons/im';
import {GiWorld} from 'react-icons/gi';
import Card from '../Components/Card';
// import reducer from '../reducers/reducer';
import '../index.css';
const initialState={
    image:'avatar1',
    power:0,
    agility:0,
    intelligence:0,
    point:14,
    weapon:'',
    opacitySword:'',
    opacityFleau:'',
    opacityArche:'',
    opacityAxe:''
};
let i=0;
const reducer=(state,action)=>
{
    const Avatar=['avatar1','avatar2','avatar3','avatar4','avatar5','avatar6','avatar7','avatar8','avatar9','avatar10','avatar11','avatar12'];
    switch(action.type)
    {
        case 'clickSword':
            // console.log(state.image);
            // console.log(action.payLoad);
            return {...state,weapon:action.payLoad,opacitySword:'opacitySword',opacityFleau:'',opacityArche:'',opacityAxe:''};
        case 'clickAxe':
            // console.log(state.image);
            // console.log(action.payLoad);
            return {...state,weapon:action.payLoad,opacitySword:'',opacityFleau:'',opacityArche:'',opacityAxe:'opacityAxe'};
        case 'clickArche':
            // console.log(action.payLoad);
            return {...state,weapon:action.payLoad,opacitySword:'',opacityFleau:'',opacityArche:'opacityArche',opacityAxe:''};
        case 'clickFleau':
            // console.log(state.image);
            // console.log(action.payLoad);
            return {...state,weapon:action.payLoad,opacitySword:'',opacityFleau:'opacityFleau',opacityArche:'',opacityAxe:''}; 
        case 'prevImage':
            // console.log(state.image);
             --i;
            
            if(i<0)
            {
                i=Avatar.length - 1;
            }
            
            // console.log(i);
            return {...state,image:Avatar[i]};
        case 'nextImage':
            // console.log(state.image);
            i++;
            if(i>Avatar.length-1)
            {
                i=0;
            }
            console.log(i);  
            return {...state,image:Avatar[i]};
        case 'addPower':
            // console.log(state.image);
            if(state.power==6)
            {
                state.power=5;
                state.point++;
            }
            if(state.point==0)
            {
                console.log('hello');
                state.point++;
                state.power--;
            }
            // point--;
            // setPoint(point);
            return {...state,power:state.power+1,point:state.point-1};
        case 'minPower':
            if(state.power==0)
            {
                state.power=1;
                state.point--;
            }
            if(state.point==14)
            {
                state.power--;
                state.point--;
            }
            // point++;
            // setPoint(point);
            return {...state,power:state.power-1,point:state.point+1};
        case 'addAgility':
            if(state.agility==6)
            {
                state.agility=5;
                state.point++;
            }
            if(state.point==0)
            {
                state.agility--;
                state.point++;
            }
            // point--;
            // setPoint(point);
            return {...state,agility:state.agility+1,point:state.point-1};
        case 'minAgility':
            // console.log(state.image);
            if(state.agility==0)
            {
                state.agility=1;
                state.point--;
            }
            if(state.point==14)
            {
                state.agility++;
                state.point--;
            }
            // point++;
            // setPoint(point);
            return {...state,agility:state.agility-1,point:state.point+1};
        case 'addIntelligence':
            // console.log(state.image);
            if(state.intelligence==4)
            {
                state.intelligence--;
                state.point++;
            }
            if(state.point==0)
            {
                state.intelligence--;
                state.point++;
            }
            return {...state,intelligence:state.intelligence+1,point:state.point-1};
        case 'minIntelligence':
            // console.log(state.image);
            if(state.intelligence==0)
            {
                state.intelligence++;
                state.point--;
            }
            return {...state,intelligence:state.intelligence-1,point:state.point+1};
        // case 'clickWeapon':
        //     console.log(action.payLoad);
        case 'RESET':
            // let i=0;
              console.log('reset')
            // return {...state,image:Avatar[i],power:0,agility:0,intelligence:0,point:14,weapon:'',opacitySword:'',opacityFleau:'',opacityArche:'',opacityAxe:''}    
    }
}


const Person = () => {
    // const Avatar=['avatar1','avatar2','avatar3','avatar4','avatar5','avatar6','avatar7','avatar8','avatar9','avatar10','avatar11','avatar12'];
    // const [image,setImage]='avatar1';
    const [state,dispatch]=useReducer(reducer,initialState);
    // let [point,setPoint]=useState(14);
    // console.log(state.image);
    return (
        <div>
            <h1>Your own Person</h1>
            <div className="person-header">
                <div className="person">
                    <GrFormPreviousLink onClick={()=>{dispatch({type:'prevImage'})}}/>
                    {/* {console.log(state.image)} */}
                    <img src={require('../assets/persos/avatars/'+state.image+'.png').default}/>
                    <GrFormNextLink onClick={()=>dispatch({type:'nextImage'})}/>
                </div>
                <div className="point">
                    <h3>Points left:<span>{state.point}</span></h3>
                    <div>
                        <ImPower/>
                        <AiOutlinePlusCircle onClick={()=>{dispatch({type:'addPower'})}}/>
                        <span>{state.power}</span>
                        <AiOutlineMinusCircle onClick={()=>{dispatch({type:'minPower'})}}/>
                    </div>
                    <div>
                        <ImMan/>
                        <AiOutlinePlusCircle onClick={()=>{dispatch({type:'addAgility'})}}/>
                        <span>{state.agility}</span>
                        <AiOutlineMinusCircle onClick={()=>{dispatch({type:'minAgility'})}}/>
                    </div>
                    <div>
                        <GiWorld/>
                        <AiOutlinePlusCircle onClick={()=>{dispatch({type:'addIntelligence'})}}/>
                        <span>{state.intelligence}</span>
                        <AiOutlineMinusCircle onClick={()=>{dispatch({type:'minIntelligence'})}}/>
                    </div>
                </div>
            </div>
            <div className="card-person">
                {/* <Card name="sword" access="../assets/armes/axe.png"/> */}
                <div onClick={(e)=>{dispatch({type:'clickSword',payLoad:e.target.className})}} className="sword">
                    <img src={require('../assets/armes/sword.png').default} className="sword" id={state.opacitySword}/>
                    <h3 className="sword">Sword</h3>
                </div>
                <div onClick={(e)=>{dispatch({type:'clickAxe',payLoad:e.target.className})}} className="axe">
                    <img src={require('../assets/armes/axe.png').default} className="axe" id={state.opacityAxe}/>
                    <h3 className="axe">Axe</h3>
                </div>
                <div onClick={(e)=>{dispatch({type:'clickArche',payLoad:e.target.className})}} className="arche">
                    <img src={require('../assets/armes/arche.png').default} className="arche" id={state.opacityArche}/>
                    <h3 className="arche">Arche</h3>
                </div>
                <div onClick={(e)=>dispatch({type:'clickFleau',payLoad:e.target.className})} className="fleau">
                    <img src={require('../assets/armes/fleau.png').default} className="fleau" id={state.opacityFleau}/>
                    <h3 className="fleau">Fleau</h3>
                </div>
            </div>
            <div className="button">
                <button className="btn btn-success btn-lg">Create</button>
                <button className="btn btn-warning btn-lg" onClick={() => dispatch({type:'RESET'})}>Reset</button>
            </div>
        </div>
    );
};

export default Person;