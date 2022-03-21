import Post from './Post'
const PostsList = ({ posts }) => {
	console.log(posts)

	
	if (!posts) {
		return <p>loading</p>
	}

    else{   
        return <>
        {posts.map((item) => (
            <Post post={item} key={item.id}/>
        ))}
        </>
    }
}

export default PostsList
