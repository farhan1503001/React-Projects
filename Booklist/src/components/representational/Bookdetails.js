import React from "react";

const Bookdetails=props=>{
   // console.log(props)
    if(props.selected_book==null)  return <div></div>
    else{
    return(
        <div className='container'>
            <h2>{props.selected_book.bookname}</h2>
            <h5>{props.selected_book.writer}</h5>
            <p>{props.selected_book.description}</p>
        </div>
    );
    }
}
export default Bookdetails;