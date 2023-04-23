import { render, screen } from '@testing-library/react';
import { Board } from './board';

describe('Board', () => {
  it('should the Board component exported correctly', () => {
    expect(Board).toBeDefined();
  });

  it('renders the correct number of cards', () => {
    const cards = [
      { uuid: '1', value: 'A' },
      { uuid: '2', value: 'A' },
      { uuid: '3', value: 'B' },
      { uuid: '4', value: 'B' },
    ];

    render(<Board cards={cards} />);

    const cardElements = screen.getAllByTestId('card');
    expect(cardElements.length).toBe(4);
  });
});
