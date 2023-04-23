import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ConcentrationInfoHeader } from './ConcentrationInfoHeader';

describe('ConcentrationInfoHeader component', () => {
  const handleRestartMock = jest.fn();

  it('should the ConcentrationInfoHeader component exported correctly', () => {
    expect(ConcentrationInfoHeader).toBeDefined();
  });

  it('should render the header with the correct name and score', () => {
    const name = 'John Doe';
    const score = { errors: 3, successes: 5 };

    const { getByText } = render(
      <ConcentrationInfoHeader
        name={name}
        score={score}
        handleRestart={handleRestartMock}
      />
    );

    expect(getByText(`WELCOME, ${name}!`)).toBeInTheDocument();
    expect(
      getByText(`Errors: ${score.errors} -- Score: ${score.successes}.`)
    ).toBeInTheDocument();
  });

  it('should call the handleRestart function on button click', () => {
    const { getByRole } = render(
      <ConcentrationInfoHeader
        name='John Doe'
        score={{ errors: 3, successes: 5 }}
        handleRestart={handleRestartMock}
      />
    );

    const button = getByRole('button', { name: 'Restart' });

    fireEvent.click(button);

    expect(handleRestartMock).toHaveBeenCalled();
  });
});
