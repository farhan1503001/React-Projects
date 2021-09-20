import React from "react";
//adding spinner component
const Loading=()=>{
    return(
    <div className="col-12" style={{padding:"60px"}}>
        <span className="fa fa-asterisk fa-5x text-primary fa-fw fa-pulse"></span>
    </div>
    )
}
export default Loading;