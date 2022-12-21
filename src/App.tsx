import React from 'react';
import './App.css';
import Deck from './Deck';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Deck
          card1='w'
          card2='a'
          card3='w'
          card4='3'
          card5='34'
          card6='asd'
          card7='1'
          card8='edf'
          ></Deck>
      </div>
    );
  }
}

export default App;
