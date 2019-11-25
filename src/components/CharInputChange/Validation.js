import React from 'react';

const Validation = (props) =>{
    let validationMessage = 'Text long enough';

    if(props.InputLenght <= 5){
      validationMessage = 'Text lenght too sort';
    }
  return(
      <div>
          {//Solution One Type
          /*{props.InputLenght < 5 ? 
          <p>Text too sort</p>
          :<p>Text lenght enough</p>
          } */} 

         <p>{//Second type Solution
           validationMessage }
        </p>

          
      </div>
  )
}
export default Validation;
