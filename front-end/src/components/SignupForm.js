import React, { useState } from 'react'
import UserService from '../services/UserService'

const SignupForm = () => {

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const user = {
            username,
            email,
            password
        }

        try{
            await UserService.newUser(user)
            console.log('User send successfully')
        }catch(e){
            console.log(e)
        }
    }

    return(
        <div>
            <h4>Signup Form</h4>
            <form>
                <table cellPadding='10' cellSpacing='10'>
                    <thead>
                        <tr>
                            <td>
                                <label>Username</label>
                                <input type="text" value={username} placeholder="Username" onChange={handleUsername} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email</label>
                                <input type="email" value={email} placeholder="Email" onChange={handleEmail} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password</label>
                                <input type="password" value={password} placeholder="Password" onChange={handlePassword} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={onSubmit}>Register</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
    );
}

export default SignupForm