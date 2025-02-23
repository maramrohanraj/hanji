import React  from "react"


interface cState{
    count : number
}

interface cProps{
    
}

class ClassTimer extends React.Component<cProps,cState>{
    state = {count:1};
    // constructor(props:cProps){
    //     super(props);
    //     setInterval(this.timerTick,1000);
    // }
    componentDidMount(): void {
        setInterval(this.timerTick,1000);
    }
    timerTick=()=>{
        this.setState({count:this.state.count+1});
    }
    render() {
        return(
            <>
            {this.state.count}
            </>
        )
    }
}

export default ClassTimer;

//  regular fnction -> they will create their own this -> caller
// arrow function -> it will go to parent this becuase it will not make own