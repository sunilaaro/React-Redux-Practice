import React from 'react';

const Avatar = (props)=>{
    return(
        <img src={props.img} style={imgStyle} alt={props.alt} />
    );
}
export default Avatar;

const imgStyle ={
    margin: '-61px 0px 0px 0px',
    width:'120px',
    borderRadius:'50%',
    border:'7px solid #fff',
    float:'right',

}
