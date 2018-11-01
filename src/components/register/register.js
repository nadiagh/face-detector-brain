import React, { Component } from 'react';





class Register extends Component {
 

  constructor(){
     super();
     this.state={
      email:'',
      name:'',
      password:'',
     }
   }



register=()=>{

fetch("https://hidden-beach-54907.herokuapp.com/register",
  {
    method:"post",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
    email: this.state.email,
    name:this.state.name,
    password:this.state.password,

   })




 })


.then(data=>data.json())
.then(data=>{

  if(data.id) 
    { 
      
      this.props.onchange("signin");
    }
  
 
})
.catch(err=>console.log(err));



}


render(){

return(




<article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
  <form>
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
       <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" >Name</label>
        <input className="b pa2 input-reset ba bg-transparent" type="name" name="name"  id="name" onChange={(e)=>this.setState({name:e.target.value})}/>
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" >Email</label>
        <input className="b pa2 input-reset ba bg-transparent" type="email" name="email"  id="email" onChange={(e)=>this.setState({email:e.target.value})}/>
      </div>

      <div className="mt3">
        <label className="db fw4 lh-copy f6" >Password</label>
        <input className="b pa2 input-reset ba bg-transparent " type="password" name="password"  id="password" onChange={(e)=>this.setState({password:e.target.value})}/>
      </div>
      
    </fieldset>
    <div className="lh-copy mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up" onClick={this.register}/></div>
    <div className="lh-copy mt3">
      <a href="#" className="f6  dim black db" onClick={()=>this.props.onchange("signin")}>You have an account!! Sign In</a>
      
    </div>
  </form>
</article>


  );


}


}



export default Register;