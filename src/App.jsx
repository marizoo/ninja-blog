import React from 'react'
import styled from 'styled-components';
import Home from './components/Home';
import Navbar from './UI/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './components/Create';

const AppContainer = styled.div``;
const Content = styled.div`
max-width: 600px;
margin: 40px auto;
padding: 20px;
`;


const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Content>
      </AppContainer>
    </Router>
  )
}

export default App
