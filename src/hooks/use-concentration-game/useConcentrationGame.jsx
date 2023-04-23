import { useState, useEffect } from 'react';
import { useAnimalCards } from '../use-animal-cards';

export const useMemoryGame = () => {
  const { cards, getAnimalCards } = useAnimalCards();
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState(null);
  const [score, setScore] = useState({ successes: 0, errors: 0 });
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setShuffledCards(
      cards.map((animal, i) => ({
        index: i,
        image: animal.imageUrl,
        flipped: false,
      }))
    );
  }, [cards]);

  const handleFlipCard = (card) => {
    const flippedCard = { ...card, flipped: true };
    let shuffledCardsCopy = [...shuffledCards];
    shuffledCardsCopy.splice(card?.index, 1, flippedCard);
    setShuffledCards(shuffledCardsCopy);
    if (selectedCards === null) {
      setSelectedCards(card);
    } else if (selectedCards.image === card?.image) {
      setSelectedCards(null);
      setScore({ ...score, successes: score.successes + 1 });
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledCardsCopy.splice(card?.index, 1, card);
        shuffledCardsCopy.splice(selectedCards.index, 1, selectedCards);
        setShuffledCards(shuffledCardsCopy);
        setSelectedCards(null);
        setScore({ ...score, errors: score.errors + 1 });
        setAnimating(false);
      }, 1000);
    }
  };

  const allCardsMatched = shuffledCards.every((card) => card.flipped);

  const handleRestart = () => {
    getAnimalCards();
    setSelectedCards(null);
    setAnimating(false);
    setScore({
      errors: 0,
      successes: 0,
    });
  };

  return {
    shuffledCards,
    handleFlipCard,
    score,
    animating,
    allCardsMatched,
    handleRestart,
  };
};
