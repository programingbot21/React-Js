import {useState} from 'react'
import Test from "./Test";

function App() {
    const username = {name: 'kunal',age: 38}
    let [counter, setCounter] = useState(15)

    // let counter = 15;
    const addValue = () =>{
      console.log("click", counter )
      // counter = counter + 1;
       setCounter(counter)
       setCounter((preCon) => preCon + 1)
       setCounter((preCon) => preCon + 1)
       setCounter((preCon) => preCon + 1)
       setCounter((preCon) => preCon + 1)
    }
    const removeVal = () =>{
      setCounter(counter-1)
      console.log(counter)
    }
  return (
    <>
    <Test />
    <ul>
      {Object.entries(username).map(([key, value]) =>(
        <li key={key}>
          {key}:{value}
        </li>
      ))}
    </ul>
    <h1>Hi I am React... </h1> 
     <p>hi I am render </p>  
     <h2>counter Value: {counter}</h2>

     <button onClick={addValue}> Add value {counter}</button>
     <br/>
      <button onClick={removeVal}>remove button</button>
    </>
  );
}

export default App;
