import React, { Component } from 'react'
import Validation from './Validation';
import Character from './Character';
class CharInputChange extends Component {
    constructor(){
        super();
        this.state ={
            charInput:''
        }
    }
    chInputHandler = (event)=>{
     this.setState({charInput:event.target.value})
    }
    deleteCharHandler =(chIndex) =>{
        const text = this.state.charInput.split('');
        text.splice(chIndex, 1);
        const updatText = text.join('');
        this.setState({charInput:updatText})

    }
    render() {
         const character = this.state.charInput.split('').map((ch, index)=>{
             return <Character key={index} charList={ch}
             clicked={()=>this.deleteCharHandler(index)}
             />
         })
         
        return (
            <div>
                <div>
                    <h2>Assignment 1</h2>
                    <input type="text" onChange={this.chInputHandler} value={this.state.charInput}/>
                </div>
                <p>{this.state.charInput}</p>
                <Validation InputLenght={this.state.charInput.length}/>
                {character}
            </div>
        )
    }
}
export default CharInputChange;