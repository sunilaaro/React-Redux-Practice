import React, { Component } from 'react';

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
         name:'',
         email:'',
         allData:[],
        }
      }
        
      handleChange = (event)=> {
            this.setState({
            [event.target.name]:event.target.value
        })
      }
    
      handleSubmit= (event)=>{
        event.preventDefault();
        const userData = {
            name:this.state.name,
            email:this.state.email,
        }
        let allData = this.state.allData;
        allData.push(userData);
        this.setState({
            allData:allData,
            name:this.state.name,
            email:this.state.email
        })
          
      }
      updateHandle = (id) =>{
          alert('hi')
      }
      deleteHandle =(id) =>{
          //let userId = this.state.allData.slice();
          const allUser = [...this.state.allData];
          console.log(allUser);
          allUser.splice(id, 1);
          this.setState({allData:allUser})
          
      }
      render() {
          console.log(this.state.allData)
            const userDtails = this.state.allData.map((user,id)=>{
                return (
                    <tr key={id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td onClick={()=>this.updateHandle(id)} style={{cursor:'pointer', color:'rgb(129, 236, 236)'}}>Update</td>
                        <td onClick={()=>this.deleteHandle(id)} style={{cursor:'pointer', color:'rgb(129, 236, 236)'}}>Delete</td>
                    </tr>
                    
                )
            })
        return (

             <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            />
                        <input type="email" name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange} 
                           />
                        <button type="submit">Save</button>
                    </form>
                    <table style={{margin:'auto'}} border='1'>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                        {userDtails}
                    </table>
                   
                    
                   
          </div>
        );
      }
}

export default UserInput;

