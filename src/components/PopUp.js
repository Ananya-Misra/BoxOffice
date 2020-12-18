import React from 'react';
function PopUp({selected,closePopup}){
   if(selected!=={}){
       return(
        <>
        <section className="popup">
            <div className="content">
                <h2>{selected.Title}<span> ({selected.Year})</span></h2>
                 <h3 className="rating">Rating: {selected.imdbRating}</h3>
                 <div className="plot">
                     <div className="plot1">  
                     <img src={selected.Poster} alt="Retry"/></div>
                   <div className="plot2">
                     <h3>Plot: <span></span>{selected.Plot}</h3>
                     <h3>Genre: <span>{selected.Genre}</span></h3>
                     <h3>Runtime:<span>    {selected.Runtime}</span></h3>
                     <h3>Cast:  <span>    {selected.Actors}</span></h3>
                     </div>
                 </div>
                 <button className="close" onClick={closePopup}>Close</button>

            </div>

        </section>

        </>
    );
    }
}
export default PopUp