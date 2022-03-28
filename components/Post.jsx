import {useState, useEffect} from "react"
import Link from "next/link"
import axios from "axios"


const Post = ({ post }) => {
    const [postComments, setPostComments] = useState(null)
    const [halfDescription, setHalfDescription] = useState(post.description.slice(0, post.description.length))

    const setDesc = () => {
        let x = post.description.slice(0, post.description.length / 2)
        setHalfDescription(x)
    }
    useEffect(() => {
        setDesc()
    }, [post])

    const vote = async (value) => {
        if (!authenticated) router.push('/login')
        
        if (value === userVote) value = 0
    
        try {
          axios.patch("https://obscure-island-29033.herokuapp.com/tider/post/")
    
          console.log(res.data)
        } catch (err) {
          console.log(err)
        }
      }
    
      return (
        <div
          
          className="flex justify-center mb-4 bg-white roundeditems-center mt-7"
          
        >

          <div className="w-10 py-3 text-center bg-gray-200 rounded-l">
            
            <div
              className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500"
              onClick={() => vote(1)}
            >
              <i
                className="text-red-500 icon-arrow-up"
              ></i>
            </div>
            <p className="text-xs font-bold">{post.vote}</p>
            <div
              className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-600"
              onClick={() => vote(-1)}
            >
             <i
                className="text-red-500 icon-arrow-down"
              ></i>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="flex items-center">
              <p className="text-xs text-gray-500">
                Posted by {post.user}
              </p>
            </div>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <a className="py-5 my-3 text-lg font-medium text-blue-500">{post.title}</a>
            </Link>
              <p>{post.description.length > 100 ? halfDescription : post.description}</p>
    
            <div className="flex">
            <Link href="/post/[id]" as={`/post/${post.id}`}>
                <a>
                  <button>
                    <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                    <span className="text-xs font-bold">Comments</span>
                  </button>
                </a>
              </Link>
              <button>
                <i className="mr-1 fas fa-share fa-xs"></i>
                <span className="text-xs font-bold">Share</span>
              </button>
            </div>
          </div>
        </div>
      )

}

export default Post