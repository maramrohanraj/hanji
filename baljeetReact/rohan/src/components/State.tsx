import React from "react";
interface stateProps{
    name : string
}

interface stateType{
    isLoggedIn : boolean,
    years : number
}

class State extends React.Component<stateProps,stateType>{
    clickHandler = () => {
        this.setState({isLoggedIn: true,years:this.state.years+1})
        this.setState({isLoggedIn: true,years:this.state.years+2})
        // How prev state is used in the this.setState
    }
    state = {isLoggedIn : false,years:20};
    render(){
        return(
            <>
            <div>Class Component <h1>{this.props.name}</h1></div>
            <div>{this.state.isLoggedIn ? <h1>"Logged In"</h1> : <h1>"Logged Out"</h1>}</div>
            <div>THE AGE IS {this.state.years}</div>
            <button onClick={this.clickHandler}>Click me</button>
            </>
        )
    }
}

export default State;