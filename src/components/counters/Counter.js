import React,{Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    
      
    render() {
        return (
            <div>
                <h3>I am Redux practice</h3>
                <p>{this.props.ctr}</p>
                <button onClick={this.props.deCrement} onChange={this.onChange}>-</button>
                <button onClick={this.props.inCrement} onChange={this.onChange}>+</button>
                     
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
