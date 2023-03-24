import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [age, setAge] = useState(null)

const [input, setInput] = useState("")


  const handleConvert = (e) => {
  e.preventDefault();
  setAge((parseInt(input) * 365))
  setInput("")
  }

  const handleRestart = (e) => {

    setAge(null)


    return 0;
  }


  const formInputOnChangeHandler = (e) => {
    setInput(e.target.value)
  }




console.log(age)
  return (
    <div className="App">
      {age && (<div><h1>You've been alive for more than {age} days!</h1></div>)}
      
      {!age && <h2>What is your age in years?</h2>}
      <form>
       {!age && <button onClick={handleConvert}>CONVERT</button> }  
       {!age && <input onChange={formInputOnChangeHandler} type="text" value={input} /> }
       <div>


       </div>
        <div>
       {age && <button>Restart</button>}
        </div>

      </form>
    </div>
  )
}

export default App
