//   const Greet:React.FC = () => {
//     return(
//         <>Greet Component</>
//     )
//   }

//   export default Greet;

interface arrofObj{
    name : string,
    age : number
}

interface obj{
    name : string,
    years ?: number,
    data ?: arrofObj[]
}

const Greet = ({name,years} : obj) => {
    return(
        <>
        <h1>Hello {name} who is of {years}</h1>
        </>
    )
}

export default Greet;