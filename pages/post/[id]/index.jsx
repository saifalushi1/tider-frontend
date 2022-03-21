import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'

const post = ({ post }) => {
	const [postComments, setPostComments] = useState([])
	// post
	const router = useRouter()
	const { id } = router.query

	useEffect(() => {
		const header = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('JWT')}`,
		}
		axios
			.get(`https://obscure-island-29033.herokuapp.com/tider/comment/`, {
				headers: header,
			})
			.then((res) => {
				console.log('Comments:', res.data[0].post)
				// for(let i = 0; i < res.data.length; i++){
				//     if(res.data[i].post === id){
				//         postComments.push({
				//             comment: res.data
				//         })
				//     }
				// }
				setPostComments(res.data)
			})
			.catch((err) => console.log('err', err))
	}, [])
	setTimeout(() => {
		console.log('post comments:', postComments)
	}, 3000)

	for (let i = 0; i < postComments.length; i++) {
		if (postComments[i].post === id) {
			console.log("forloop:", postComments[i])
		}
	}

	console.log(id)
	return (
		<>
			<div>
				<p className='text-xs text-gray-500'>Posted by {post.user}</p>
				<span className='my-1 text-lg font-medium'>{post.title}</span>
			</div>
			<div>{post.description}</div>
			<div>{}</div>
		</>
	)
}

export const getServerSideProps = async (context) => {
	const res = await fetch(
		`https://obscure-island-29033.herokuapp.com/tider/post/${context.params.id}`
	)
	const post = await res.json()

	return {
		props: {
			post,
		},
	}
}

export default post
