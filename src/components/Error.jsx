import React from "react";

export const Error = ({msg})=>{
    return(
        <p className="my-3 p-4 text-center alert alert-primary">{msg}</p>
    )
}