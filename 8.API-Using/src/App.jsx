import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const BASE_URL = "https://jsonplaceholder.typicode.com"

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users")
    console.log(response.data)
  }

  const getUserById = async (id) => {
    const response = await axios.get(BASE_URL + "/users/" + id)
    console.log(response.data)
  }

  useEffect(() => {
    // getAllUsers()
    getUserById(2)
  }, [])

  return (
    <>

    </>
  )
}

export default App