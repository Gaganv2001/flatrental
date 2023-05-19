import React, { useState } from 'react'
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'antd';




function Registerscreen() {
    const navigate = useNavigate();
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')


    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success, setsuccess] = useState();



    async function register() {

        if (password === cpassword) {

            let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
            if (password.match(passwordRegex)) {
                console.log("Password is valid!");
                if (email.includes("@gmail.com")) {
                    const user = {
                        name,
                        email,
                        password,
                        cpassword
                    }

                    try {
                        setloading(true);
                        // eslint-disable-next-line
                        const result = await axios.post('api/users/register', user).data;
                        setloading(false)
                        setsuccess(true)

                        setname('')
                        setemail('')
                        setpassword('')
                        setcpassword('')
                        navigate('/login');
                    } catch (error) {
                        console.log(error);
                        setloading(false);
                        seterror(true)
                    }
                } else {
                    console.log("Email is not valid!");
                    alert("Invalid email address.")
                }

            } else {
                console.log("Password is not valid!");
                alert("Password is not valid!")
            }
        }
        else {
            alert('Password not matched')
        }

    }

    return (
     
       <section>
        <div className="row justify-content-center mt-5" >
            <div className='register' >
                <div className='col-1' >
                    <h2 style={{marginLeft:'90px'}}>SignUp</h2>
                    <form id="form" className='flex flex-col'>
                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <input type="password" className="form-control" placeholder="Confirm Password" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />

                    <button className='btn btn-primary btn-block mt-3' onClick={register}>Register</button>
                    </form>

                </div>
                <div className='col-2'></div>
            </div>
            </div>
        </section>
       

    )


}
export default Registerscreen



