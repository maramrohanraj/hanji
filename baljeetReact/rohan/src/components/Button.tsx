interface obj {
    click ?: (e: React.MouseEvent) => void // it is afunction which return type is void 
}
const Button = ({click}:obj) => {
  
    return(
        <>
        <button onClick={click}>Click me</button>
        </>
    )
}

export default Button;