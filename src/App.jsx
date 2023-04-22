import './App.css';
import { useState } from 'react';

import {
  Board,
  Congratulations,
  ConcentrationInfoHeader,
  ConcentrationGameForm,
} from './components';
import { useMemoryGame } from './hooks';

const App = () => {
  const {
    shuffledCards,
    handleFlipCard,
    score,
    animating,
    allCardsMatched,
    handleRestart,
  } = useMemoryGame();

  const [userEnteredName, setUserEnteredName] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleStartGame();
  };
  const handleStartGame = async () => {
    setUserEnteredName(true);
  };
  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <div className='container'>
      {!userEnteredName ? (
        <ConcentrationGameForm
          name={name}
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
        />
      ) : (
        <section>
          <ConcentrationInfoHeader
            name={name}
            score={score}
            handleRestart={handleRestart}
          />
          {allCardsMatched && <Congratulations name={name} />}
          <Board
            cards={shuffledCards}
            animating={animating}
            handleCardClick={handleFlipCard}
          />
        </section>
      )}
    </div>
  );
};

export default App;
