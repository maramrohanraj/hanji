import React from "react";

interface GreetingProps{
    name : string
}

class Greeting extends React.Component<GreetingProps>{
    clickHandler = () => {
        alert("CLICKED")
    }
    render() {
        return(
            <>
            <h1>Class Component {this.props.name}</h1>
            <button onClick={this.clickHandler}>CLICK ME </button>
            </>
        )
    }
}


export default Greeting;