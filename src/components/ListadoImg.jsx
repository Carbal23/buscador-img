import React from "react";
import { Img } from "./Img";

export const ListadoImg = ({imagenes})=>{
    return (
        <div className="col-12 p-5 row">
            {imagenes.map(imagen=>(
                <Img
                key={imagen.id}
                imagen={imagen}
                
                />
            ))}

        </div>
    )
}