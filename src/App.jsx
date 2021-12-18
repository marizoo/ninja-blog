import React from 'react'
import styled from 'styled-components';
import Home from './components/Home';
import Navbar from './UI/Navbar';

const AppContainer = styled.div``;
const Content = styled.div`
max-width: 600px;
margin: 40px auto;
padding: 20px;
`;


const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Content>
        <Home />
      </Content>
    </AppContainer>
  )
}

export default App
