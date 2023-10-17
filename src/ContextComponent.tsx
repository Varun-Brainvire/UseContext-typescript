import React, { useContext } from "react";
import { ThemeContext } from "./App";

const ContextComponent : React.FC = () => {

    const darkTheme = useContext(ThemeContext)
    // console.log(darkTheme)
    const themeStyles = {
        backgroundColor : darkTheme ? '#333' : "#CCC",
        color:darkTheme ? "#CCC" : "#333",
        padding:"2rem",
        margin:"2rem"
    }

    return(
        <div style={themeStyles}>Function Theme</div>
    )
}

export default ContextComponent