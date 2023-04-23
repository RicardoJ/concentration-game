import { renderHook, act } from '@testing-library/react-hooks';
import { useMemoryGame, useAnimalCards } from '../../hooks';

jest.mock('../use-animal-cards', () => ({
  useAnimalCards: jest.fn(),
}));

describe('useMemoryGame', () => {
  const mockCards = [
    {
      name: 'dog',
      imageUrl: 'https://example.com/dog.png',
      flipped: false,
      index: 0,
    },
    {
      name: 'cat',
      imageUrl: 'https://example.com/cat.png',
      flipped: false,
      index: 1,
    },
  ];

  beforeEach(() => {
    useAnimalCards.mockReturnValue({
      cards: mockCards,
      getAnimalCards: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return initial values', () => {
    const { result } = renderHook(() => useMemoryGame());

    expect(result.current.selectedCards).toBe(undefined);
    expect(result.current.score).toEqual({ successes: 0, errors: 0 });
    expect(result.current.animating).toBe(false);
    expect(result.current.allCardsMatched).toBe(false);
  });

  it('should shuffle cards on mount', () => {
    const { result } = renderHook(() => useMemoryGame());

    expect(result.current.shuffledCards).not.toEqual([]);
    expect(result.current.shuffledCards.length).toBe(mockCards.length);
  });

  it('should handleFlipCard', () => {
    const { result } = renderHook(() => useMemoryGame());

    act(() => {
      result.current.handleFlipCard(result.current.shuffledCards[0]);
    });

    expect(result.current.selectedCards).not.toBe(null);
    expect(result.current.score).toEqual({ successes: 0, errors: 0 });

    act(() => {
      result.current.handleFlipCard({
        ...result.current.selectedCards,
        image: 'cat2.jpg',
      });
    });
    console.log(result.current.score.successes);
    expect(result.current.selectedCards).toBe(undefined);
    expect((result.current.score.successes = 1)).toEqual(1);

    act(() => {
      result.current.handleFlipCard(result.current.shuffledCards[2]);
    });

    expect(result.current.selectedCards).not.toBe(null);

    act(() => {
      result.current.handleFlipCard({
        ...result.current.selectedCards,
        imageUrl: 'elephant2.jpg',
      });
    });

    expect(result.current.selectedCards).toBe(undefined);
    expect((result.current.score.successes = 1)).toEqual(1);
    expect((result.current.score.errors = 1)).toEqual(1);
  });

  it('should handleRestart', () => {
    const { result } = renderHook(() => useMemoryGame());

    act(() => {
      result.current.handleFlipCard(result.current.shuffledCards[0]);
      result.current.handleFlipCard(result.current.shuffledCards[1]);
      result.current.handleFlipCard(result.current.shuffledCards[2]);
      result.current.handleFlipCard(result.current.shuffledCards[3]);
    });

    act(() => {
      result.current.handleRestart();
    });

    expect(result.current.selectedCards).toBe(undefined);
    expect(result.current.score).toEqual({ successes: 0, errors: 0 });
    expect(result.current.animating).toBe(false);
    expect(result.current.allCardsMatched).toBe(false);
  });
});
