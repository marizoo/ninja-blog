import React, {useState} from 'react'
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

    return (
        <Container>
            <h2>Add a new blog</h2>
            <form>
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
                <button>Add Blog</button>
                
            </form>
        </Container>
    )
}

export default Create
