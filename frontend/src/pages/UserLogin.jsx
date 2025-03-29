import React, { useContext, useState } from 'react'
import Home_bg from "../assets/Home_bg.jpg";
import { Link } from 'react-router-dom'
import Logo from "../assets/Teach_2.svg"
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()


    const submitHandler = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if (response.status === 200) {
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }

        console.log(userData);

        setEmail('');
        setPassword('');
    }

    return (
        <div >
            <div className='p-7 h-screen flex flex-col justify-between'>
                {/* <img className='w-16' src={Logo} alt="" /> */}
                <div className='flex justify-center items-center'>
                    <div className=' w-1/3 h-full mr-16  flex justify-end'>
                        <img src={Home_bg} className='h-full rounded-3xl mr-5' alt="" />
                    </div>
                    <div className='w-1/3 pl-16'>
                        <form onSubmit={(e) => {
                            submitHandler(e)
                        }}>
                            <h3 className='text-lg font-medium mb-2'>User email</h3>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                                required
                                type="email"
                                placeholder='email@example.com'
                            />

                            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                            <input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                                required type="password"
                                placeholder='password'
                            />

                            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>


                        </form>
                        <p className='text-center'>New here? <Link to='/Signup' className='text-blue-600'>Create new Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin