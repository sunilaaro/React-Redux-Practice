import React from 'react';

/* Start Dynamic Greeting */
    
const Header = ()=>{
    //const date = new Date(2019,1,1,19);
    const date = new Date();
    const currentTime = date.getHours();

    let greeting ="";
    const customStyle = {
        backgroundColor:"#900048",
        color:"",
        textAlign:"center",
        margin:'0px',
        top:'0',
        padding:"16px, 32px",
        boxShadow:"0 0 10px 0 rgba(0,0,0,0.3)",
        position:"fixed",
        transition:'0.6s ease',
        width:'100%',
        
       

    }

    if(currentTime < 12 ){
      greeting="Hello Good Morning";
      customStyle.color='green';
    }else if(currentTime < 16 ){
      greeting="Hello Good AfterNoon";
      customStyle.color='#806400';
    }
    else if(currentTime < 20){
      greeting="Hello Good Evening";
      customStyle.color='rgb(141, 80, 119)';
    }else{
      greeting="Hello Good Night";
      customStyle.color='red';
    }
    return(
        <h1 style={customStyle}>{greeting}</h1>
    )

}
export default Header;