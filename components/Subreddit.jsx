import axios from "axios"
import Head from "next/head"
import Nav from "./Nav"
import { useState } from "react"

const Subreddit = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userAuthToken}`,
        }
        const subredditURL = 'https://obscure-island-29033.herokuapp.com/tider/Subreddit/' 
        try{
            await axios.post(subredditURL, {title: title, description: description})
            .then(res => console.log(res))
        } catch(err){
            console.error(err)
        }
    }

    return(
        <div className="flex bg-white">
            <Nav />
      <Head>
        <title>Create a SubTider!</title>
      </Head>
      <div
        className="h-screen bg-center bg-cover w-36"
        style={{ backgroundImage: "url('/images/bricks.jpg')" }}
      ></div>
      <div className="flex flex-col justify-center pl-6">
        <div className="w-98">
          <h1 className="mb-2 text-lg font-medium">Create a SubTider</h1>
          <hr />
          <form 
        //   onSubmit={submitForm}
          >
            <div className="my-6">
              <p className="font-medium">Title</p>
              <p className="mb-2 text-xs text-gray-500">
                SubTider names including capitalization cannot be changed.
              </p>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded hover:border-gray-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="my-6">
              <p className="font-medium">Description</p>
              <p className="mb-2 text-xs text-gray-500">
                This is how new members come to understand your SubTider.
              </p>
              <textarea
                className="w-full p-3 border border-gray-200 rounded hover:border-gray-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {/* <small className="font-medium text-red-600">
                {errors.description}
              </small> */}
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-1 text-sm font-semibold capitalize blue button">
                Create Community
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Subreddit