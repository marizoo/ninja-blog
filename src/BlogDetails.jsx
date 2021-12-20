import {useParams} from 'react-router-dom'
import styled from "styled-components";


const Container = styled.div``;

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <Container>
      <h2>Blog Details - { id }</h2>
    </Container>
  );
};

export default BlogDetails;
