import React, { useState } from 'react'
import './Currency.css'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import axios from 'axios'

function Currency() {
    let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
    let API_KEY = "fca_live_rHbqmQUn738kyd9wd0w0J4Hr2CMykkrjaSc5wiwv"


    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState(0)

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency= ${fromCurrency}`)
        const result = ((response.data.data[toCurrency]) * amount).toFixed(2)
        setResult(result)
    }
    return (
        <div className='currency-div'>
            <div style={{ marginTop: "-20px", fontFamily: "arial", fontWeight: "bold", fontSize: "20px", width: "100%", textAlign: "center" }}>
                <h3>Exchange Rate App</h3>
            </div>
            <div style={{ marginTop: "30px" }}>
                <input type="number" className='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                    <option>GBP</option>
                </select>
                <FaArrowRightArrowLeft style={{ justifyContent: "center", marginTop: 10, marginRight: 7 }} />
                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />
            </div>
            <div>
                <button onClick={exchange} className='exchange-button'>Convert</button>
            </div>

        </div>
    )
}

export default Currency