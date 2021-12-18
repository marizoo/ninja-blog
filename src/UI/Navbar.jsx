import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.nav`
padding: 20px;
display: flex;
align-items: center;
max-width: 600px;
margin: 0 auto;
border-bottom: 1px solid #f2f2f2;
`;

const H1 = styled.h1`
color: #f1356d;
`;

const Links = styled.div`
margin-left: auto;
`;

const linkStyle = {
    marginLeft: "16px",
    textDecoration: "none",
    padding: "6px",
}




const Navbar = () => {
    return (
        <Container>
            <H1>The Dojo Blog</H1>
            <Links>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link 
                to="/create"
                style={linkStyle}
                >New Blog</Link>
            </Links>
        </Container>
    )
}

export default Navbar
