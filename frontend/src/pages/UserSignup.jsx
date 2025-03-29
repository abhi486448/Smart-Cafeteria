import React, { useState, useContext } from 'react'
import Home_bg from "../assets/Home_bg.jpg";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [userData, setUserData] = useState({})


    const navigate = useNavigate()

    const { user, setUser } = useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault();

        const newUser = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if (response.status === 201) {
            const data = response.data

            setUser(data.user)
            localStorage.setItem('token', data.token)

            navigate('/home')
        }

        console.log(userData);

        setFirstname('');
        setLastname('')
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>

            <div className='flex h-full w-full'>
                <div className=' w-1/2 h-full  flex justify-end'>
                    <img src={Home_bg} className='h-full rounded-3xl mr-14' alt="" />
                </div>
                <div className='w-1/3 pl-16 pt-16'>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>

                        <h3 className='text-base font-medium mb-2'>User name</h3>
                        <div className='flex gap-4 mb-5'>
                            <input
                                className='bg-[#eeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                                required
                                type="text"
                                placeholder='first name'
                                value={firstname}
                                onChange={(e) => {
                                    setFirstname(e.target.value)
                                }}
                            />

                            <input
                                className='bg-[#eeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                                required
                                type="text"
                                placeholder='last name'
                                value={lastname}
                                onChange={(e) => {
                                    setLastname(e.target.value)
                                }}
                            />
                        </div>



                        <h3 className='text-base font-medium mb-2'>User email</h3>
                        <input
                            className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                            required
                            type="email"
                            placeholder='email@example.com'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />

                        <h3 className='text-base font-medium mb-2'>Enter Password</h3>

                        <input
                            className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                            required type="password"
                            placeholder='password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />

                        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Create account</button>


                    </form>
                    <p className='text-center'>Already have a account? <Link to='/Login' className='text-blue-600'>Login here</Link></p>
                </div>
            </div>
            <div className='mt-2'>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Servive apply</span>.</p>
            </div>
        </div>
    )
}

export default UserSignup