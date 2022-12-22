import React from 'react';
import Deck from './components/Deck';

class App extends React.Component {

  render() {
    return (
      <div className="App" style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Deck cards={[
          'mighty-miner',
          'knight',
          'knight',
          'knight',
          'knight',
          'knight',
          'knight',
          'knight',
        ]}></Deck>
      </div>
    );
  }
}

export default App;
