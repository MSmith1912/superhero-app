import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import SuperHeroList from './components/SuperHeroList';

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <AppContainer>
    <SuperHeroList />
  </AppContainer>
)

export default hot(module)(App);
