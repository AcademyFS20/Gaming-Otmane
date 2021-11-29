import React,{useReducer} from 'react';
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
};
let point=14;
let i=0;
const reducer=(state,action)=>
{
    const Avatar=['avatar1','avatar2','avatar3','avatar4','avatar5','avatar6','avatar7','avatar8','avatar9','avatar10','avatar11','avatar12'];
    switch(action.type)
    {
        case 'prevImage':

             --i;
            
            if(i<0)
            {
                i=Avatar.length - 1;
            }
            
            console.log(i);
            return {...state,image:Avatar[i]};
        case 'nextImage':
            i++;
            if(i>Avatar.length-1)
            {
                i=0;
            }
            console.log(i);  
            return {...state,image:Avatar[i]};
        case 'addPower':
            if(state.power==6)
            {
                state.power=5;
            }
            point--;
            return {...state,power:state.power+1};
        case 'minPower':
            if(state.power==0)
            {
                state.power=1;
            }
            point++;
            return {...state,power:state.power-1};
        case 'addAgility':
            if(state.agility==6)
            {
                state.agility=5;
            }
            point--;
            return {...state,agility:state.agility+1};
        case 'minAgility':
            if(state.agility==0)
            {
                state.agility=1;
            }
            point++;
            return {...state,agility:state.agility-1};    
    }
}


const Person = () => {
    // const Avatar=['avatar1','avatar2','avatar3','avatar4','avatar5','avatar6','avatar7','avatar8','avatar9','avatar10','avatar11','avatar12'];
    // const [image,setImage]='avatar1';
    const [state,dispatch]=useReducer(reducer,initialState);
    // console.log(state.image);
    return (
        <div>
            <h1>Your own Person</h1>
            <div className="person-header">
                <div className="person">
                    <GrFormPreviousLink onClick={()=>{dispatch({type:'prevImage'})}}/>
                    <img src={require('../assets/persos/avatars/'+state.image+'.png').default}/>
                    <GrFormNextLink onClick={()=>{dispatch({type:'nextImage'})}}/>
                </div>
                <div className="point">
                    <h3>Points left:{point}</h3>
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
                        <AiOutlinePlusCircle/>
                        <span>0</span>
                        <AiOutlineMinusCircle/>
                    </div>
                </div>
            </div>
            <div className="card-person">
                {/* <Card name="sword" access="../assets/armes/axe.png"/> */}
                <div>
                    <img src={require('../assets/armes/sword.png').default}/>
                    <h3>Sword</h3>
                </div>
                <div>
                    <img src={require('../assets/armes/axe.png').default}/>
                    <h3>Axe</h3>
                </div>
                <div>
                    <img src={require('../assets/armes/arche.png').default}/>
                    <h3>Arche</h3>
                </div>
                <div>
                    <img src={require('../assets/armes/fleau.png').default}/>
                    <h3>Fleau</h3>
                </div>
            </div>
            <div className="button">
                <button className="btn btn-success btn-lg">Create</button>
                <button className="btn btn-warning btn-lg">Reset</button>
            </div>
        </div>
    );
};

export default Person;