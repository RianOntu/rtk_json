import React from 'react'

function PostCard({post}) {
    
    return (
        <>
        <h1><b>Title:</b>{post?.title}</h1>
        <p><b>Description:</b>{post?.body}</p><br />
        </>
    )
}

export default PostCard
