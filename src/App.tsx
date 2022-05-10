import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  font-size: 20px;
  color: green;
`;

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </Header>
    </div>
  );
}

export default App;
