import React from 'react';

const TwoParam = (props) => {

    const style = {
        backgroundColor: props.two,
        padding: "20px 0",
        border: "1px solid rgb(141, 121, 124)",
        color: props.one
    }

    return (
        <div style={ style }>
            Hello
        </div>
    )
}

export default TwoParam;