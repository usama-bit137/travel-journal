import React from "react"
import "../Styles/Header.css"
import icon from "../Icons/airplane.png"

export default function Header() {
    return (
        <header className="header">
            <img src={icon} width="50px" alt="plane icon"></img>
            <h1 className="title">Travel Journal</h1>
        </header>
    )
}