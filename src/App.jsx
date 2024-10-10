import { useState } from "react"
import Header from "./components/header"
import UserInput from "./components/userInput"

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
[inputIdentifier] : newValue}}
)
}






  return (
<>
<Header/>
<UserInput onChange={handleChange} userInput={userInput}/>

</>

  )
}

export default App
