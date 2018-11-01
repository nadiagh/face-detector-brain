import React from 'react';
import './imagelinkform.css';



const Imagelinkform = ({change,submit,user})=>{


    return(
    	<div>
    	<p className="f3">{user.name},This magic will detect human faces  
    	</p>
    	<div className="center">
    	<div className="form center pa4 br3 shadow-2 ">
    	<input className='f4 pa2 w-70 center' type='text' onChange={change}/>
    	
    	<button className='w-30 grow f4 link ph3 pv2 dib black bg-dark-green' onClick={submit}>Detect</button>
    	</div>

    	</div>
    	</div>





	);




}

export default Imagelinkform;