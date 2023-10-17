import React, { Component } from 'react'
import { ThemeContext } from './App'

class ClassComponent extends Component {
    
    themeStyles(dark : any) {
        console.log(dark)
        return {
            backgroundColor : dark ? '#333' : "#CCC",
        color:dark ? "#CCC" : "#333",
        padding:"2rem",
        margin:"2rem"
        }
    }

  render() {
    return (
      <div>
        <ThemeContext.Consumer>
            {darkTheme => {
                return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
            }}
        </ThemeContext.Consumer>
      </div>
    )
  }
}

export default ClassComponent
