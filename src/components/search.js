import React from 'react';
import Final from './Final'
import {useState} from 'react';
import axios from 'axios';
import PopUp from './PopUp';
function Search()
{
    var [state,setState]=useState({s:"",results:[],f:0,selected:{}});
    // var [state2,setState2]=useState({c:0});
const ree="http://www.omdbapi.com/?apikey=ae76659d&";

const searche=(e)=> { 
  if(e.key==="Enter")
  {
    axios(ree+"&s="+state.s).then(({data})=>
    {
    // console.log(state.s);
    //   console.log(data.Search);
      let result=data.Search;
      setState(prev=>{
          return{...prev,results:result,f:1}//way ONE to change setState
      }) 
    } 
   );
  } 
}
const Input=(e)=>{
let s1= e.target.value;
setState({s:s1});//way TWO to change setState
}
// console.log(state);
// console.log(state.s);
// console.log(state.f);

//--------------------------popup----------------//
const openPopUp=id=>{
    axios(ree+"&i="+ id).then(({data})=>{
        let conclusion=data;
        setState(prev=>{
            return({...prev,selected:conclusion})
        });
    });
}

const closePopUp=()=>{
    setState(prev=>{
        return({...prev,selected:{}})
    });

}
// console.log(state.selected);
// console.log(state.selected!==undefined);

// console.log(state.selected.length);
const onlyForPop=()=>{
          
    if(state.selected!==undefined){
        if(Object.keys(state.selected).length!==0){
        return <PopUp selected={state.selected} closePopup={closePopUp}/>}
        else{
            // console.log("high kick 2");
            return false
        }
        
    }
    else{
// console.log("hick kick");
 return false;
    
}}
// const tryr =()=>{
//     if(state2.c===2){
//     return<h1>Not Found</h1>}
  
// }

// console.log(state.results);
// console.log(state2.c);
if(state.f===1 && state.s!=="" && state.results!==undefined)
{
    return(
        <>
        <section>
            <input placeholder="Search moviename"
              spellCheck="false"
             type="text" 
             className="Search"
             onChange={Input}
             onKeyPress={searche}/>
        </section>  
        <Final final={state.results} openPopUp={openPopUp}/>
        {onlyForPop()}
        </>
    )}
    else{
        // console.log("hello there");
        return(
            <>
            <section>
                <input placeholder="Search moviename and Enter"
                spellCheck="false"
                 type="text" 
                 className="Search"
                 onChange={Input}
                 onKeyPress={searche}/>
            </section>
                 
               
            </>
        )
    }
}
export default Search;
