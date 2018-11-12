import React from 'react';

function Cell(props){
    return (
        <button className="cell" onClick={() => props.onClick()} >
            {props.value ? props.value : <span>&nbsp;</span>}
        </button>
    ); 
}

export default Cell