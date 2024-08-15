import { useState } from 'react'
import './App.css'

function App() {
  //* useState: Bir state'in değerini set metotu ile değiştirdiğinde component yeniden render edilir!

  // const [firstName, setFirstName] = useState('Atilla')
  // const [lastName, setLastName] = useState('Güngör')
  const [counter, setCounter] = useState(0)
  const [names, setNames] = useState(["Enes", "Atilla", "Barış"])

  console.log("component çalıştı")

  // const handleChange = () => {
  //debugger
  //   setFirstName("Enes"),
  //     setLastName("Bayram")
  // }
  return (
    <div>
      {/* <div>{firstName} {lastName}</div>
      <div>
        <button onClick={handleChange}>Değiştir</button>
      </div> */}
      <div>{counter}</div>
      <br />
      <div>
        <button onClick={() => { setCounter(counter + 1) }}>Arttır</button>
        <br />
        <button onClick={() => { setCounter(counter - 1) }}>Azalt</button>
      </div>
      <br />
      <div>{names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}</div>
    </div>
  )
}

export default App