/* eslint-disable no-unused-vars */
import './App.css'
import Login from './Login'
//Normal exportlar süslü parantez içinde olur, default exportlar ise normal yazılır.
import { users } from './Login'

function App() {
  console.log(users)

  return (
    <>
      <div>
        <Login />
      </div>
    </>
  )
}

export default App