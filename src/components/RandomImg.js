import React from 'react'


export default function RandomImg() {
  return (<>
  
      <div className='container-fluid row style-container '>
     
          <div className='col-sm-6 marg'>
           <h1> The Best Plant</h1>
                <h1> Under the One</h1>
                <h1> roof</h1>
                
                <p>A plant needs sunlight, carbon dioxide, minerals and water to make food by photosynthesis. A green substance in plants called chlorophyll traps the energy from the Sun needed to make food. Chlorophyll is mostly found in leaves, inside plastids, which are inside the leaf cells.</p><br></br>
               <center><button className='tag'><a style={{textDecoration:"none", color: "#2A6E5D "}} href='https://www.nelda.org.in/blog/category/how-you-can-help/5-notable-tree-plantation-ngos-in-india'><h5>Get started </h5></a></button></center>
          </div>
          <div className='col-sm-6'>
             <img className="marg"width="80%"height="90%"src='https://i0.wp.com/www.halaplants.ae/wp-content/uploads/2021/09/alocasia-macrorrhiza-stingray.jpg?fit=800%2C800&ssl=1' alt='randomimg'/>
          </div>
      </div>
  
    </>
  )
}