import { useState } from "react"
import Header from "./components/header"
import UserInput from "./components/userInput"
import Results from "./components/results"

function App() {

// as it is dynamic , we need to update value of the input and result so we need useState 

const [userInput,setUserInput] = useState({
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 10
})


  // function 01

function handleChange (inputIdentifier, newValue){
  setUserInput((prev)=> { return{...prev,
[inputIdentifier] : +newValue}}
)
}


const inputValid  = userInput.duration>= 1



  return (
<>
<Header/>
<UserInput onChange={handleChange} userInput={userInput}/>
{!inputValid && (<p className="center"> please enter a duration Greater than your  <i>BALLS</i> </p>)}
{inputValid && <Results input={userInput}/>}

</>

  )
}

export default App
