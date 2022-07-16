import React from "react";
import Info from "./info";
import About from "./About";
import Intrest from "./interest";
import Icons from "./icons";
import "../style.css"
function App() {
    return (
        <div className="main">
            <Info/>
            <About />
            <Intrest />
            <Icons/>
        </div>
     )
}


export default App