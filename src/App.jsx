import React from "react";
import { MainLayout } from "./components/layout/mainLayout";
import { Restaurants } from "./components/restaurants";
import { restaurants } from "/materials/mock"

export const App = () => {
    return(
        <MainLayout>
           {restaurants.map((item) => (
            <div>
                <span><Restaurants rests={item} /></span>
            </div>
           ))}
        </MainLayout>
    )
}