import React from 'react'
import { useGetPostsQuery, useSetPostMutation } from '../redux/features/api/baseAPI'
import PostCard from './PostCard';

function Home() {
    const {data:posts,isLoading,isError,error}=useGetPostsQuery();
   const [setPost,{data:post}]=useSetPostMutation()

    if (isLoading || !posts) {
        return <p>Loading...</p>;
    }

    // Check if there is an error
    if (isError) {
        return <p>Error: {error}</p>;
    }
    const onSubmit=(event)=>{
        event.preventDefault();
setPost(post);
console.log(post);
    }
    return (
        <>

        <form action=""  onSubmit={onSubmit}>
            <input type="text" name='post' />
            <button type='submit'>Submit</button>
        </form>
        {
            posts.map(post=><PostCard key={post.id} post={post}></PostCard>)
        }
        </>
    )
}

export default Home
