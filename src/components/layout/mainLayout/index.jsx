import React, { Children } from "react";
import { Footer } from "../../Footer";
import { Header } from "../../Header";

export const MainLayout = ({children}) => {
    return (
        <>
        <Header />
            {children}
        <Footer />
        </>       
    )
}