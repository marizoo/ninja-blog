import React,{useEffect, useState} from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [name, setName] = useState('mario')

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect( () => {
        console.log('use effect ran');
        console.log(name);
    }, [name] )

    return (
        <div>
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>change Name</button>
            {name}
        </div>
    )
}

export default Home
