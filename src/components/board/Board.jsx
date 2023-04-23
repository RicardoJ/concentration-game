import { Card } from '../card';

export function Board({ cards, animating, handleCardClick }) {
  return (
    <main className='board'>
      {cards.map((card, index) => (
        <Card
          key={`${card.uuid}${index}`}
          animating={animating}
          handleCardClick={handleCardClick}
          card={card}
        />
      ))}
    </main>
  );
}
