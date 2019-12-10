import React, { Component } from 'react';
import Avatar from './images/Avatar';


class Contact extends Component{
   constructor(props){
       super();
       this.state ={
         showCantact:true,
       }
   }
   showCantactHandel = () =>{
    const doesShow = this.state.showCantact;
    this.setState({
        showCantact: !doesShow
    })
   }
    render(){
        const cardStyle= {
            borderRadius:'25px',
            postion:'relative',
            padding:'25px 15px',
            backgroundColor:'#81ecec',
            margin:'auto',
            width:'400px',
            hieght:'200px',
            boxShadow:'0 2px 5px #ccc',
            textAlign:'left',
            marginBottom:'50px',
           
        }
        const nameStyle = {
           color:'',
           fontSize:'2em',
           display:'flex',
           flex:'1',
           margin:'10% 20px 0',
        }
        const butttonHide ={
            position: 'relative',
            top: '0',
            left:'385px',
            border:'none',

            
        }
            let crt = null;
            if(this.state.showCantact){
                return(
                    <div>
                    
                    <div style={cardStyle}>
                    <button style={butttonHide} className="hide" onClick={this.showCantactHandel}>-</button>
                       <h4 style={nameStyle}>{this.props.name}</h4>
                        <Avatar img={this.props.img} />
                        <p className="phone">Phone: {this.props.phone}</p>
                        <p className="email">Email: {this.props.email}</p>
                    </div>
                    </div>
                    
                )
            }
          
            return(
                <div>
                <div style={cardStyle}>
                    <h4>Do you want to see contact cleck below</h4>
                 <button style={butttonHide} className="hide" onClick={this.showCantactHandel}>+</button>
                </div>
                {crt}
                </div>
            )
    }
}


export default Contact;