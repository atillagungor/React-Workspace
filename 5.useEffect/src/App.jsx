import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    console.log("useEffect çalıştı!")
  })

  useEffect(() => {
    console.log("İlk render edildiğinde çalışır!")
    //Veritabanından ürünleri getir ve listele
  }, [])

  useEffect(() => {
    console.log("İlk render edildiğinde, firstName ve lastName state değerleri değiştiğinde çalışır!")
  }, [firstName, lastName])

  // useEffect(() => {
  //   console.log("İlk render edildiğinde ve lastName state değeri değiştiğinde çalışır!")
  // }, [lastName])
  return (
    <>
      <div>
        <button onClick={() => setFirstName("Atilla")}>Adı Değiştir</button>
      </div>
      <div>
        <button onClick={() => setLastName("Güngör")}>Soyadı Değiştir</button>
      </div>
    </>
  )
}

export default App