import { useState } from 'react'
import './App.css'

function App() {

  const [vize1, setVize1] = useState(0)
  const [vize2, setVize2] = useState(0)

  const OrtalamaBul = () => {
    debugger
    const toplamSonuc = Topla() / 2
    Yazdir(toplamSonuc)
  }

  const Topla = () => {
    debugger
    const toplam = vize1 + vize2
    return toplam
  }

  const Yazdir = (sonuc) => {
    console.log("Ortalama = " + sonuc)
  }

  return (
    <>
      <div>
        <div><input type="number" value={vize1} onChange={(e) => { setVize1(Number(e.target.value)) }} /></div>
      </div>
      <div>
        <div><input type="number" value={vize2} onChange={(e) => { setVize2(Number(e.target.value)) }} /></div>
      </div>
      <div>
        <button onClick={OrtalamaBul}>Ortalama Bul</button>
      </div>
    </>
  )
}

export default App