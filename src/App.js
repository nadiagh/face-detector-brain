import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo'; 
import Rank from './components/rank/rank';
import Facerecognition from './components/facerecognition/facerecognition'; 
import Imagelinkform from './components/imagelinkform/imagelinkform';
import Signin from './components/signin/signin';
import Register from './components/register/register';
import Particles from 'react-particles-js';







const particlesopt={
particles: {
                  number:{
                    value:50,
                    density:{
                      enable:true,
                      value_area:800,
                    }
                  }
                }
}

const initialState={
    input:'',
    url:'',
    box:{},
    route:"signin",
    user:{},
}


class App extends Component {
  constructor(){
super();
this.state= initialState;
  }






onRouteChange=(route)=>{

if (route==="signin")
  {
    this.setState(initialState);
  }
 
  this.setState({route:route});


}



boxPosition=(response)=>{


 
 const data=response.outputs[0].data.regions[0].region_info.bounding_box;
 const img=document.getElementById('im');
 const bottom= img.height- data.bottom_row * img.height;
 const right=img.width-data.right_col * img.width;
 const top=data.top_row * img.height;
 const left=data.left_col * img.width;
   



 this.setState({box:{bottom:bottom,right:right,top:top,left:left}});



console.log(data);

}


loaduser=(data)=>{

this.setState({user:data})

}


onChange=(event)=>{
  this.setState({input:event.target.value});

 

}


onsubmit=(event)=>{

  this.setState({url:this.state.input});

  fetch("https://hidden-beach-54907.herokuapp.com/imageUrl",
  {
    method:"post",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
    input:this.state.input

   })




 })
  .then(response=>response.json())

  .then((response)=>{

   

    this.boxPosition(response);


  })
  .catch((err)=>{console.log(err)});

 fetch("https://hidden-beach-54907.herokuapp.com/image",
  {
    method:"put",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
    id:this.state.user.id

   })




 })

.then(data=>data.json())
.then(data=>Object.assign(this.state.user,{entries:data}))
.catch(err=>console.log(err));



   
  
  }
 





  render() {
    return (
      <div className="App">
      
       
        <Particles className="particles" params={particlesopt}/>
        {this.state.route==="signin"?<Signin loaduser={this.loaduser} onchange={this.onRouteChange}/>: 
        this.state.route==="register"?<Register onchange={this.onRouteChange}/>:
        <div>
        <Navigation  onchange={this.onRouteChange}/>
        <Logo/>
         <Rank user={this.state.user}/>
        <Imagelinkform change={this.onChange} submit={this.onsubmit} user={this.state.user}/>
        <br/>

        <Facerecognition src={this.state.url} box={this.state.box} />
        <br/><br/>
        </div>
        }


        

        
       
       
      </div>
    );
  }
}

export default App;
