import React, { Children } from "react";


export const Restaurants = ({rests}) => {
    return (
        <div>
            <h1>{rests.name}</h1>  
            <h3>{rests.menu[0].name}</h3>
            <h3>{rests.menu[0].price}</h3>  
            <h3>{rests.menu[0].ingredients}</h3>  
        </div>
    )
}