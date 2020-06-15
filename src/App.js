import React from 'react';
import styled from 'styled-components';
import styles from './App.module.scss';

function App() {
  const Hello = styled.p`
    font-size: 1.5em;
    color: palevioletred;
  `;
  
  return (
    <div className={styles.App}>
      <Hello>Hello, world?..</Hello>
    </div>
  );
}

export default App;
