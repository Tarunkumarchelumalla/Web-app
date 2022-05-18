import React, { useState } from 'react'

export default function Login() {

    const [showCreate, setshowCreate] = useState(false)


    return (
        <>
            <div>

                <div className="login-page" id="myForm">
                    <div className="form">
                        <form className="register-form">
                            <input type="text" placeholder="name" />
                            <input type="password" placeholder="password" />
                            <input type="text" placeholder="email address" />
                            <button>create</button>
                            <p className="message">Already registered? <a href="/">Sign In</a></p>
                        </form>
                        <form className="login-form">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button>login</button>
                            <p className="message">Not registered? <a href="/" onClick={(e) => { e.preventDefault(); setshowCreate(true) }}>Create an account</a></p>
                        </form>
                    </div>
                </div>



            </div>
           {/* {showCreate ? <Login/> : null}  */}
        </>
    )

}
