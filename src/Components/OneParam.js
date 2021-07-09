import React from 'react';

const OneParam = (props) => {
    console.log(props.one);
    return (
        <div>
            {isNaN(props.one) ? <span>The word is: {props.one}</span> : <span>The number is: {props.one}</span>}
        </div>
    )
}

export default OneParam;