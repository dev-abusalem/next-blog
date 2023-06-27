"use client"

import { createContext, useContext, useState } from "react"

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({children}) =>{
    const [mode , setMode] = useState("light");

    const toggle = () =>{
        setMode((prev)=>(prev === "light" ? "dark" : "light"));
    }

    return(
        <ThemeModeContext.Provider value={{toggle , mode}}>
            <div className={`theme ${mode} `}>
            {children}
            </div>
        </ThemeModeContext.Provider>
    )
}