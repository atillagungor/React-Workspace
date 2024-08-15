import './App.css'

function App() {
  //* JavaScript kodları burada yazılır.
  let a = 15
  const musteriAdi = "Atilla"

  let vize1 = 50
  let vize2 = 10
  let ortalama = (vize1 + vize2) / 2

  let isimler = [
    "Atilla",
    "Ahmet",
    "Mehmet",
    "Barış"
  ]

  return (
    //*HTML kodları burada yazılır.
    <>
      <h1>Müşterinin Adı: {musteriAdi}</h1>
      <p>a değişkeninin değeri: {a}</p>
      <p>Ortalamanız: {(vize1 + vize2) / 2} {ortalama >= 50 ? "geçtiniz!" : "kaldınız!"} </p>
      <br></br>
      <p>{isimler.map((isim, index) => (
        <div style={{ borderStyle: 'solid', borderColor: 'cyan', backgroundColor: 'bisque' }} key={index}>{isim}</div>
      ))}</p>
    </>
  )
}

export default App