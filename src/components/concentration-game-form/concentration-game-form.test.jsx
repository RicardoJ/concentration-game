import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ConcentrationGameForm } from './ConcentrationGameForm';

describe('ConcentrationGameForm component', () => {
  const handleSubmitMock = jest.fn();
  const handleNameChangeMock = jest.fn();

  it('should the ConcentrationGameForm component exported correctly', () => {
    expect(ConcentrationGameForm).toBeDefined();
  });

  it('should render the form', () => {
    const { getByPlaceholderText, getByRole } = render(
      <ConcentrationGameForm
        name=''
        handleSubmit={handleSubmitMock}
        handleNameChange={handleNameChangeMock}
      />
    );

    const input = getByPlaceholderText('Name');
    const button = getByRole('button', { name: 'Play' });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should call the handleSubmit function on submit', () => {
    const { getByRole } = render(
      <ConcentrationGameForm
        name='John Doe'
        handleSubmit={handleSubmitMock}
        handleNameChange={handleNameChangeMock}
      />
    );

    const button = getByRole('button', { name: 'Play' });

    fireEvent.click(button);

    expect(handleSubmitMock).toHaveBeenCalled();
  });

  it('should call the handleNameChange function on name input change', () => {
    const { getByPlaceholderText } = render(
      <ConcentrationGameForm
        name=''
        handleSubmit={handleSubmitMock}
        handleNameChange={handleNameChangeMock}
      />
    );

    const input = getByPlaceholderText('Name');

    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(handleNameChangeMock).toHaveBeenCalled();
  });
});
