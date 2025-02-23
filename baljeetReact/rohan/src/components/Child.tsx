interface Childprops{
    data:string,
    code : (args:string) => void
}

const Child = ({data,code}:Childprops) =>{
    function clickHandler(){
        code("Bye")
    }
    
    return(
        <>
        <div>Child {data}</div>
        <button onClick={clickHandler}>CHANGE THE DATA</button>
        </>
    )
}

export default Child;