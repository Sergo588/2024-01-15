import React, { Children } from "react";
import styles from "./styles.module.scss";

export const Restaurants = ({rests}) => {
    return (
        <div className={styles.root}>
            <h1>{rests.name}</h1>  
            <h3>{rests.menu[0].name}</h3>
            <h3>{rests.menu[0].price}</h3>  
            <h3>{rests.menu[0].ingredients}</h3>  
        </div>
    )
}