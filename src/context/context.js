import  React,{createContext, useContext,useReducer} from 'react';
import reducer from '../reducers/reducer';
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from '../actions';
const initialState={
    isSideOpen:false,
}
const AppContext=createContext();
export const AppProvider=({children})=>
{
    const [state,dispatch]=useReducer(reducer,initialState);
    const Testing=()=>
    {
        console.log('I am the provider');
    }
    return
    (<AppContext.Provider value={{...state,Testing}}>
        {children}
    </AppContext.Provider>)
}
export const useAppContext=()=>{
    return useContext(AppContext);
}