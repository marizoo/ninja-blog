import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
max-width: 400px;
margin 0 auto;
text-align: center;

label {
    text-align: left;
    display: block;
}

h2 {
    font-size: 20px;
    color: #f1356d;
    margin-bottom: 30px;
}

input, textarea, select {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
}

button {
    background: #f1356d;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
}
`;


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const newBlog = {title, body, author}

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(newBlog)
        }) .then(() => {
            console.log('new blog added')
            setIsPending(false);
            navigate('/');
        })
        setTitle("")
        setBody("")
    }

    return (
        <Container>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(ev) => setBody(ev.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(ev) => setAuthor(ev.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </Container>
    )
}

export default Create
