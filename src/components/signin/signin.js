import React, { Component } from 'react';





class Signin extends Component
{

  constructor(){
    super();
    this.state={
      email:'',
      password:'',
    }
  }
 

signin=()=>{
  
 
 fetch("https://hidden-beach-54907.herokuapp.com/signin",
  {
    method:"post",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
    email: this.state.email,
    password:this.state.password

   })




 })


.then(data=>data.json())
.then(data=>{

  if(data.id) 
    { 
      this.props.onchange("home");
      this.props.loaduser(data); 
      
    }
  
 
})

.catch(err=>console.log(err));

}


 





render(){

return(

<article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

	<main className="pa4 black-80">
  <form target="uploader_iframe">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email" onChange={(e)=>this.setState({email:e.target.value})}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" >Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={(e)=>this.setState({password:e.target.value})}/>
      </div>
     
    </fieldset>
    <div className="">
      <input  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"  onClick={this.signin} />
    </div>
    <div className="lh-copy mt3">
     <a href="#" className="f6  dim black db" onClick={()=>this.props.onchange("register")}>Register</a>
      
    </div>
  </form>
  <iframe id="uploader_iframe" name="uploader_iframe" style={{display: "none"}}></iframe>
</main>

</article>


	);


}


}



export default Signin;