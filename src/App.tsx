import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: ${(props) => props.theme.palette.primary.main};
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
