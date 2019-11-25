import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';
import Counter from './components/counters/Counter';  
import CharInputChange from './components/CharInputChange/CharInputChange';

class App extends Component {
  state = {
    persons:[
      {id:'dfsd', name:'Tutu', age:'10'},
      {id:'sd', name:'Champ', age:'5'},
      {id:'fg', name:'Aadi', age:'15'}
    ],
    otherValue:"Some other value",
    showPerson: false,
  }

  switchNameHandler= ()=>{
   // console.log('was clicked');
   this.setState({
     persons:[
      {name:'Tutu G', age:'30'},
      {name:'Champ', age:'20'},
      {name:'Aadi gupta', age:'25'}
     ]
   })
  }
  /* togelHandelChange = (event) =>{
    this.setState({inputdata: event.target.value});
    
  }
  togelHandelSubmit = (event) =>{
    this.setState({inputdata: event.target.value});
    event.preventDefault();
  } */

  inputChangeHandler = (event,id)=>{
    const personIndex  = this.state.persons.findIndex(p =>{
      return p.id ===id
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togelPersonHandeler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      fornt:'inherit',
      border:'2px solid blue',
      margin:'5px',
      padding:'13px',
      cursor:'pointer'
    }
    let persons = null;
    if(this.state.showPerson){
         persons=(
          <div>
            {this.state.persons.map( (person,index) =>{
              return(
              <Person key={person.id} 
              name={person.name} 
              age={person.age}
              onclick={()=>this.deletePersonHandler(index)}
              onchange={(event)=>this.inputChangeHandler(event, person.id)}/>
              )

            })}
          {/* <Person name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
            onchange={this.inputChangeHandler}
           />
          <Person name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
           >Champ is always win!</Person>
          <Person name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            /> 
            */}
          </div>
         )
    }

    return (
      <div className="App">
      <h2>Hi I'm React App</h2>
      <span>This is really working!</span><br/>
      <button 
        style={style}
        onClick={this.togelPersonHandeler} >Togel Person</button>
        {persons}
     {/* Insted to ternary opration used javescript logic */}

      {/*this.state.showPerson === true ? 
      <div>
        <Person name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          onchange={this.inputChangeHandler}
         />
        <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
         >Champ is always win!</Person>
        <Person name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          />
        </div>: null
      */}
        <hr />
        <Counter />
        <hr />
        <CharInputChange />
      </div>
    );

   
  }
 
}

export default App;
