import { useCallback, useEffect, useState } from 'react';
import { searchAnimals } from '../../services/animals';
export function useAnimalCards() {
  const [cards, setCards] = useState([]);

  const getAnimalCards = useCallback(async () => {
    try {
      const animals = await searchAnimals();

      const duplicatedAnimals = [...animals, ...animals].sort(
        () => Math.random() - 0.5
      );
      setCards(
        duplicatedAnimals.map((animal) => ({ ...animal, flipped: false }))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAnimalCards();
  }, []);

  return { cards, getAnimalCards };
}
