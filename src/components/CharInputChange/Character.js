import React from 'react'

const Character = (props) =>{

    const style = {
        display:'inline-block',
        padding:'16px',
        margin: '16px',
        border:'1px solid black',
        textAlign:'center',
    }
    return (
        <div style={style}>
            <p onClick={props.clicked}>{props.charList}</p>
        </div>
    )
}
export default  Character;