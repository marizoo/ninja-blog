import React from 'react'
import useFetch from '../useFetch';
import BlogList from './BlogList';

const Home = () => {

    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
   
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title='All Blogs' />} 
          {/* {blogs && <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />}  */}
        </div>
    )
}

export default Home
