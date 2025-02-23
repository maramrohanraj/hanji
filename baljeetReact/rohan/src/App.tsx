// import Greet from "./components/Greet"
// import "./App.css"
// import Button from "./components/Button"

// const clickHandler = (e:React.MouseEvent) => {
//   const target = e.target as HTMLButtonElement;
//   alert(target.innerHTML+"  hi")
// }
// function App() {

//   return (
//     <div className="container">
//      <Greet name="Rohan" years={10}></Greet>
//      <Button click = {clickHandler}></Button>
//     </div>
//   )
// }

// export default App



// import "./App.css"
// // import Parent from "./components/Parent"
// import State from "./components/State"

// function App() {

//   return (
//     <div className="container">
//      <State name="Rohan"></State>
//      {/* <Parent></Parent> */}
//     </div>
//   )
// }

// export default App







import "./App.css"
import ClassTimer from "./components/ClassTimer"
// import Timer from "./components/Timer"



function App() {

  return (
    <div className="container">
    {/* <Timer></Timer> */}
    <ClassTimer></ClassTimer>
    </div>
  )
}

export default App


