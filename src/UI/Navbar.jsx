import React from 'react'
import styled from 'styled-components';

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

const AA = styled.a`
margin-left: 16px;
text-decoration: none;
padding: 6px;

&:hover {
    color: #f1356d;
}
`


const Navbar = () => {
    return (
        <Container>
            <H1>The Dojo Blog</H1>
            <Links>
                <AA href="/">Home</AA>
                <AA 
                href="/create"
                style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}
                >New Blog</AA>
            </Links>
        </Container>
    )
}

export default Navbar
