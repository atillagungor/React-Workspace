import './App.css'
import Container from './Container'
import Product from './Product'

function App() {
  // const productName = "Buzdolabı"
  return (
    <div>
      {/* <Product productName="Ayakkabı" price={5000} />
      <Product productName="Televizyon" price={10000} />

      <Product productName={productName} price={12000} /> */}
      <Container>
        <Product productName={"Konsol"} price={40000} />
        <Product productName={"Televizyon"} price={10000} />
      </Container>
    </div>

  )
}

export default App