import { useState } from 'react';
import '../components/Register.css';

export const Registrationform = () => {
    const [user, setuser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        Phone:"",
    })


    const Handleinputchange = (e) => {
        const { name, value } = e.target;
        setuser((prev)=>({...prev,[name]:value}))
    }


    const Handleformsubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <div className="wrapper">
            <p>Hello my FirstName is {user.firstname}and phoneno is {user.Phone}</p>
            <h2>Registration</h2>
            <form onSubmit={Handleformsubmit}>
                <div className="input-box">
                    <label htmlFor="firstname">FirstName</label>
                    <input type="text" name='firstname' placeholder="Enter your name" required value={user.firstname} onChange={Handleinputchange} />
                </div>
                <div className="input-box">
                    <label htmlFor="lastname">LastName</label>
                    <input type="text" name='lastname' placeholder="Last Name" required value={user.lastname} onChange={Handleinputchange} />
                </div>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder="Enter your email" required value={user.email} onChange={Handleinputchange} />
                </div>
                <div className="input-box">
                    <label htmlFor="password">password</label>
                    <input type="password" name='password' placeholder="Create password" required value={user.password} onChange={Handleinputchange} />
                </div>
                <div className="input-box">
                    <label htmlFor="Phone">Phoneno</label>
                    <input type="Phone" name='Phone' placeholder="Phoneno " required value={user.Phone} onChange={Handleinputchange} />
                </div>

                <div className="policy"> 
                    <input type="checkbox" />
                    <h3>I accept all terms & condition</h3>
                </div>
                <div className="input-box button">
                    <input type="Submit" />
                </div>
                <div className="text">
                    <h3>Already have an account? <a href="#">Login now</a></h3>
                </div>
            </form>
        </div>

    )
}