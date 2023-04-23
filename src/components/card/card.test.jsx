import { render, fireEvent } from '@testing-library/react';
import { Card } from './card';
import logo from '../../assets/vite.svg';

describe('Card', () => {
  it('should the Card component exported correctly', () => {
    expect(Card).toBeDefined();
  });

  it('renders a card with an image', () => {
    const card = {
      uuid: '123',
      image: '/path/to/image.jpg',
      flipped: false,
    };
    const { getByAltText } = render(<Card card={card} />);
    const imageElement = getByAltText('animals');
    expect(imageElement).toBeInTheDocument();
  });

  it('should render front image when card image is not available', () => {
    const card = { uuid: 'card-1', flipped: false, image: null };
    const handleCardClick = jest.fn();

    const { getByAltText } = render(
      <Card animating={false} handleCardClick={handleCardClick} card={card} />
    );

    expect(getByAltText('front-image')).toBeInTheDocument();
    expect(getByAltText('front-image')).toHaveAttribute('src', logo);
  });

  it('calls handleCardClick when clicked', () => {
    const card = {
      uuid: '123',
      image: '/path/to/image.jpg',
      flipped: false,
    };
    const handleCardClick = jest.fn();
    const { getByTestId } = render(
      <Card card={card} handleCardClick={handleCardClick} />
    );
    const cardElement = getByTestId('card');
    fireEvent.click(cardElement);
    expect(handleCardClick).toHaveBeenCalled();
  });
});
