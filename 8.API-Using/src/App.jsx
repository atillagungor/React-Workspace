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

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser)
    console.log(response.data)
  }

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser)
    console.log(response.data)
  }

  const deleteUserById = async (id) => {
    const deleteResponse = await axios.delete(`${BASE_URL}/users/${id}`)
    console.log(deleteResponse.data)
  }

  const newUser = {
    id: 11,
    name: "Atilla Güngör",
    username: "Atilla",
    email: "atillaagungorr@gmail.com",
  }

  useEffect(() => {
    getAllUsers()
    getUserById(2)
    createUser(newUser)
    updateUser("10", { id: 10, name: "Atilla Güngör", username: "Ati", email: "atillaagungorr@gmail.com" })
    deleteUserById("8")
  }, [])


  return (
    <>
    </>
  )
}

export default App