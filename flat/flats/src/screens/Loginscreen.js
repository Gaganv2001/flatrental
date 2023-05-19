import React, { useState } from 'react'
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';
function Loginscreen() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();


    async function Login() {


        const user = {

            email,
            password,

        }

        try {
            setloading(true);
            const result = (await axios.post('api/users/login', user)).data
            setloading(false);

            localStorage.setItem('currentUser', JSON.stringify(result));
             if (result.isAdmin) {
                window.location.href = '/admin';
            } else {
                window.location.href = '/home';
    }
        } catch (error) {
            console.log(error)
            setloading(false);
            seterror(true)
        }




    }

    return (
        <div>
            {loading && (<div className="d-flex justify-content-center">
                <Loader />
            </div>)}
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    {error && (<Error message='Invalid Credentials' />)}

                    <div className='bs'>
                        <h2>Login</h2>

                        <input type="email" className="form-control" placeholder="Email"
                            value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="password" className="form-control" placeholder="Password"
                            value={password} onChange={(e) => { setpassword(e.target.value) }} />


                        <button className='btn btn-primary btn-block mt-3' onClick={Login}>Login</button>
                        <p className="forgot-password text-center">
                           New User? Register <a href="/register">Here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )

    
}
export default Loginscreen


