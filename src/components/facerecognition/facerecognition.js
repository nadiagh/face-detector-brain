import React from 'react';

import './facerecognition.css'



const Facerecognition = ({src,box})=>{


    

        return(
       
       <div className='center ma'>
        <div className="absolute mt2"  >
        
        <img id="im"  alt="" src={src}  height='auto' width='500px'/> 
         
       
        {box.map((e,i) => <div key={i} className='bounding-box' 
                        style={{top:`${e.top}px`, right: `${e.right}px`, bottom: `${e.bottom}px`, left: `${e.left}px`}}>
                      </div>
         )
        }
        

        </div>

       </div>
        
       
       





  );

    




}

export default Facerecognition;