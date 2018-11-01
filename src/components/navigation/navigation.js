import React from 'react';




const Navigation=({route,onchange})=>{
return(
<nav style={{display:'flex', justifyContent:'flex-end'}}>

<p className='f3 link dim black underline pa3 pointer' onClick={()=>onchange("signin")}>Sign Out</p>
</nav>




	);



}

export default Navigation;