import {useParams} from 'react-router-dom'
import styled from "styled-components";
import useFetch from './useFetch';


const Container = styled.div`

h2 {
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 10px;
}

div{
  margin: 20px 0;
}

/* button{
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
} */
`;

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);


  return (
    <Container>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </Container>
  );
};

export default BlogDetails;
