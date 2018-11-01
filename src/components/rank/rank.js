import React from 'react';





const Rank=({user})=>{

return(



	<div>
		<p className="white f3">Your current number of entries is ...</p>
		<p className="white f1">{user.entries} </p>

	</div>


	

	);





}



export default Rank;