import React from 'react'

function Product({ productName, price }) {
    // const { productName, price } = props //{procuctName: "Ayakkabı" price:2000}
    return (
        <div>
            <div>Ürün Bilgileri</div>
            <hr />
            <div>
                <div>İsim: {productName}</div>
                <div>Fiyat: {price}</div>
            </div>
            <hr />
        </div>
    )
}

export default Product