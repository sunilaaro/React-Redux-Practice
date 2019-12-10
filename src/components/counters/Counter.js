import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as Calculator from '../Calculator/Calculator.js'; //import {Add,Subtraction,Multiply} from '../Calculator/Calculator.js';

class Counter extends Component {
          
    render() {
        return (
            <div>
                <h2>I am Redux practice</h2>
                <p>{this.props.ctr}</p>
                <button onClick={this.props.deCrement} onChange={this.onChange}>-</button>
                <button onClick={this.props.inCrement} onChange={this.onChange}>+</button>
                <hr />

                <h1>{Calculator.Add(2,3)}</h1>
                <h1>{Calculator.Subtraction(2,3)}</h1>
                <h1>{Calculator.Multiply(2,3)}</h1>
                     
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        ctr: state.counter
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        inCrement: ()=> dispatch({type:'INCREMENT'}),
        deCrement: ()=> dispatch({type:'DECREMENT'}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Counter);
