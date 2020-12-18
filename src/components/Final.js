import React from 'react';

function Final({final, openPopUp,closePopUp}){
    
    return(
        <>
         <div className="cardsframe">
        {final.map(final=>(
          
          
            <div key={final.imdbID} className="card" onClick={()=>openPopUp(final.imdbID)}>
            <img className="card2" src={final.Poster} alt="Avatar"/>
             <div className="container">
              <h4>{final.Title}</h4>
             </div>
           </div>
         

        ))}
       
         
        </div>

        </>
    );

}
export default Final;