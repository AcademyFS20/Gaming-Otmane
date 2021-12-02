import React from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {ImPower} from 'react-icons/im';
import {IoManSharp} from 'react-icons/io';
import {GiWorld} from 'react-icons/gi';
const Point = (props) => {
    return (
        <div>
            <{props.name}/>
            <AiOutlinePlusCircle/>
            <AiOutlineMinusCircle/>
        </div>
    );
};

export default Point;