import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseAPI=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com'
    }),
    endpoints:(builder)=>({
        getPosts:builder.query({
            query:()=>"/posts"
        }),
        setPost:builder.mutation({
            query:(post)=>({
                url:'/posts',
                method:'POST',
                body:post
                
            })
        })
    })
})
export const {useGetPostsQuery,useSetPostMutation}=baseAPI;
export default baseAPI;