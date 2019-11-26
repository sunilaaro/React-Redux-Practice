import React from 'react';

const Validation = (props) =>{
    
    let validationMessage = '';
    let style = {
        color:'#fff',
    }
    if(props.InputLenght > 5){
      validationMessage = 'Text long enough';
      style.color = 'green';
    }
    if(props.InputLenght > 0 && props.InputLenght <=5){
      validationMessage = 'Text lenght too sort';
      style.color = 'red';
    }
    
  return(
      <div>
          {//Solution One Type
          /*{props.InputLenght < 5 ? 
          <p>Text too sort</p>
          :<p>Text lenght enough</p>
          } */} 

         <p style={style}>{//Second type Solution
           validationMessage }
        </p>

          
      </div>
  )
}
export default Validation;
