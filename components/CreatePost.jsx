import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap'
import { useState } from 'react'
import { content } from '../tailwind.config'
import axios from 'axios'

const CreatePost = () => {
	const [modal, setModal] = useState(false)
	const [title, setTitle] = useState('')
	const [description, setDesciption] = useState('')

	const handleSubmit = async (e) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("JWT")}`,
        }
        e.preventDefault();
        const createURL = 'https://obscure-island-29033.herokuapp.com/tider/post/' 
        try {
              await axios.post(createURL, {title: title, description: description, vote: 0, user: 2}, {headers: headers})
                .then((res) => {
                console.log("Post request:", res)
              })
              .catch(err => console.log(err))
          } catch (err) {
            console.log("post request error:", err)
          }
      };

	const toggle = () => setModal(!modal)
    console.log("description:", description)
    console.log("title:", title)
	return (
		<>
			<div
				style={{
					display: 'block',
					width: 700,
					padding: 30,
				}}
			>
				<h4>Create A Post</h4>
				<Button color='primary' onClick={toggle}>
					Open Modal
				</Button>
				<Modal
					isOpen={modal}
					toggle={toggle}
					modalTransition={{ timeout: 2000 }}
				>
					<ModalBody className='flex bg-white'>
						<form onSubmit={(e) => handleSubmit(e)}>
							<input
								className='mb-2'
								type='text'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder='Title'
							/>
							<textarea
								className='w-full p-3 border border-gray-200 rounded hover:border-gray-500'
								value={description}
								onChange={(e) => setDesciption(e.target.value)}
								placeholder=''
							/>

							<button className='w-full py-2 mb-4 text-xs font-bold text-gray-100 uppercase bg-blue-400 border border-blue-400 rounded'>
								Create Post
							</button>
						</form>
					</ModalBody>
				</Modal>
			</div>
		</>
	)
}

export default CreatePost
