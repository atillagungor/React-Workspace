/* eslint-disable no-unused-vars */
import React from "react"

//Bu tarz exportlar componentin dışında yazılmalı.
export const users = [
    { id: 1, name: "Atilla" },
    { id: 2, name: "Barış" }
]

function Login() {
    //Fragment

    return (
        <>
            <div>
                <p>Kullanıcı Adı:</p>
                <input type="text" />
            </div>
            <div>
                <p>Şifre</p>
                <input type="password" />
            </div>
            <br></br>
            <button>Giriş Yap</button>
        </>
    )
}

export default Login