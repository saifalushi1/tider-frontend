import registerImg from '../images/registerImg.jpeg'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

const register = () => {
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState({})

	const router = useRouter()

	const submitForm = async (e) => {
        const headers = {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${userAuthToken}`,
        }
		e.preventDefault()
		try {
			await axios.post('http://localhost:8000/register/', {
				username: username,
                password: password,
                password2: password,
                email: email,
                first_name: 'bob',
                last_name: "marley"
			})

			router.push('/login')
		} catch (err) {
			// setErrors(err.response.data)
            console.log(err)
		}
	}


	return (
		<div className='flex bg-white'>
			<Head>
				<title>Register</title>
			</Head>

			<div
				className='h-screen bg-center bg-cover w-36'
				style={{ backgroundImage: "url('https://i.redd.it/ax8u9llk8jy61.jpg')" }}
			></div>
			<div className='flex flex-col justify-center pl-6'>
				<div className='w-70'>
					<h1 className='mb-2 text-lg font-medium'>Sign Up</h1>
					<p className='mb-10 text-xs'>
						By continuing, you agree to our User Agreement and Privacy Policy
					</p>
					<form onSubmit={(e) => submitForm(e)}>
						<input
							className='mb-2'
							type='email'
							value={email}
							setValue={setEmail}
							placeholder='EMAIL'
							error={errors.email}
                            onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className='mb-2'
							type='text'
							value={username}
							setValue={setUsername}
							placeholder='USERNAME'
							error={errors.username}
                            onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className='mb-4'
							type='password'
							value={password}
							setValue={setPassword}
							placeholder='PASSWORD'
							error={errors.password}
                            onChange={(e) => setPassword(e.target.value)}
						/>

						<button className='w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded'>
							Sign Up
						</button>
					</form>
					<small>
						Already a tider?
						<Link href='/login'>
							<a className='ml-1 text-blue-500 uppercase'>Log In</a>
						</Link>
					</small>
				</div>
			</div>
		</div>
	)
}

export default register
