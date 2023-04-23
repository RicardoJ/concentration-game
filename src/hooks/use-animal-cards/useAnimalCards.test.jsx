import { renderHook } from '@testing-library/react-hooks';
import { useAnimalCards } from './useAnimalCards';
import { searchAnimals } from '../../services/animals';

jest.mock('../../services/animals', () => ({
  searchAnimals: jest.fn(),
}));

describe('useAnimalCards', () => {
  it('should set cards with duplicated animals', async () => {
    searchAnimals.mockResolvedValue([
      { id: 1, name: 'Lion' },
      { id: 2, name: 'Tiger' },
      { id: 3, name: 'Bear' },
    ]);

    const { result } = renderHook(() => useAnimalCards());

    expect(result.current.cards).toEqual([]);

    await result.current.getAnimalCards();

    expect(searchAnimals).toHaveBeenCalled();
    expect(result.current.cards.length).toBe(6);
  });
});
