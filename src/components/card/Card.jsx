import logo from '../../assets/vite.svg';

export function Card({ animating, handleCardClick, card }) {
  return (
    <div
      data-testid='card'
      className='card'
      onClick={() => !card.flipped && !animating && handleCardClick(card)}
    >
      <div
        className={`card-block-inner ${card.flipped && 'card-block-flipped'}`}
      >
        <img className='card-block-front' src={logo} alt='front-image' />
        <img className='card-block-back' src={card.image} alt='animals' />
      </div>
    </div>
  );
}
