import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Nav from '../components/Nav'
import Post from '../components/Post'
import PostsList from '../components/PostsList'
import CreatePost from '../components/CreatePost'

export default function Home({ }) {
	const [posts, setPosts] = useState(null)
    const [comments, setComments] = useState(null)
	const [userId, setUserId] = useState('')
	const [loggedIn, setLoggedIn] = useState(true)

    // Make this asynchronus later
	useEffect(() => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("JWT")}`,
        }
		axios
			.get('https://obscure-island-29033.herokuapp.com/tider/post/', {
				headers: header,
			})
			.then((res) => {
                console.log("Posts:", res)
                setPosts(res.data)
            })
			.catch((err) => console.log('err:', err))
        axios
            .get('https://obscure-island-29033.herokuapp.com/tider/comment/', {
                headers: header
            })
            .then((res) => {
                console.log("Comments:", res)
                setComments(res.data)
            })
            .catch((err) => console.log("err", err))
	}, [loggedIn])


	return (
		<>
			<Head>
				<title>Tider</title>
				<meta name='keywords' content='reddit clone, social media, reddit' />
			</Head>
			<Nav />
			<PostsList posts={posts}/>
            <CreatePost />
		</>
	)
}
