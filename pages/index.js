import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

export default function Home({ token }) {
	const [posts, setposts] = useState(null)
	const [userAuthToken, setUserAuthToken] = useState('')
	const [userId, setUserId] = useState('')
	const [loggedIn, setLoggedIn] = useState(false)
	const [isLoginInfoIncorrect, setIsLoginInfoIncorrect] = useState(false)
	const headers = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${userAuthToken}`,
	}

	// const loginRequest = (username, password) => {
		const loginUrl ='http://localhost:8000/api/token/'
        useEffect(() => { 

            axios.post(
                loginUrl,
				{ username: "alushi", password: "1234" },
				{ headers: headers }
                )
                .then((res) => {
                    setUserAuthToken(res.data.access)
                    localStorage.setItem('JWT', res.data.access)
                    setIsLoginInfoIncorrect(false)
                    console.log(res)
                })
                .catch((err) => setIsLoginInfoIncorrect(true))
            }, [])
	// }

    useEffect(() => {
        axios.get("http://localhost:8000/tider/post/", {headers: headers})
        .then(res => console.log(res))
        .catch(err => console.log("err:", err))

    }, [userAuthToken])

	const storeId = async (email) => {
		const storeIdUrl = `https://protected-hollows-70202.herokuapp.com/grouper/users/${email}`
		await axios
			.get(
				storeIdUrl,
				{
					params: {
						email: email,
					},
				},
				{ headers: headers }
			)
			.then((res) => {
				setUserId(res.data)
				localStorage.setItem('UUID', res.data._id)
			})
			.catch((err) => console.log(err))
	}

	return (
		<>
			<Head>
				<title>Tider</title>
				<meta name='keywords' content='reddit clone, social media, reddit' />
			</Head>
            <form>
                <p>hsadas</p>

            </form>
		</>
	)
}
