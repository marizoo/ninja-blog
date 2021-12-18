import React from 'react'
import styled from 'styled-components';

const Container = styled.div``;

const BlogPreview = styled.div`
padding: 10px 16px;
margin: 20px 0;
border-bottom: 1px solid #fafafa;

&:hover {
box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
}

h2 {
font-size: 20px;
color: #f1356d;
margin-bottom: 8px; 
}
`;





const BlogList = ({blogs, title, handleDelete}) => {
    return (
        <Container>
            <h2>{title}</h2>
            {blogs.map( blog => (
                <BlogPreview key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={ () => handleDelete(blog.id) } >delete blog</button>
                </BlogPreview>
            ) )}
        </Container>
    )
}

export default BlogList
