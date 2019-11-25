import React, {useState} from 'react';
import './App.css';

import Person from './Person/Person';

const App = props =>{
  const [personsState, setPersonsState] = useState({
    persons:[
      {name:'Tutu', age:'10'},
      {name:'Champ', age:'5'},
      {name:'Aadi', age:'15'}
    ],
   
  });

  const switchNameHandler = () =>{
    // console.log('was clicked');
    setPersonsState({
      persons:[
       {name:'Tutu G', age:'30'},
       {name:'Champ', age:'20'},
       {name:'Aadi gupta', age:'25'}
      ]
    })
   }
    return (
      <div className="App">
      <h2>Hi I'm React App</h2>
      <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Champ is always win!</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
}

export default App;



