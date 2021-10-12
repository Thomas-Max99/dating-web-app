import react from 'react';
import Header from './components/header/Header';
import DatingCards from './components/card/DatingCards';
import SwipedButtons from './components/swipeButtons/SwipeButtons';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header/>
        <DatingCards/>
        <SwipedButtons/>
    </div>
  );
}

export default App;
