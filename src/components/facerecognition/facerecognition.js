import React from 'react';

import './facerecognition.css'



const Facerecognition = ({src,box})=>{


    

        return(
       
       <div className='center ma'>
        <div className="absolute mt2"  >
        
        <img id="im"  alt="" src={src}  height='auto' width='500px'/> 
         

         <div className='bounding-box' 
         style={{top:`${box.top}px`, right: `${box.right}px`, bottom: `${box.bottom}px`, left: `${box.left}px`}}>
         </div>


        </div>

       </div>
        
       
       





	);

    




}

export default Facerecognition;