import React from 'react';
import { render } from '@testing-library/react';
import { Congratulations } from './Congratulations';

describe('Congratulations component', () => {
  it('should the Congratulations component exported correctly', () => {
    expect(Congratulations).toBeDefined();
  });

  it('should render the congratulations message with the correct name', () => {
    const name = 'John Doe';

    const { getByText } = render(<Congratulations name={name} />);

    expect(
      getByText(`Congratulations, ${name}! You won!!.`)
    ).toBeInTheDocument();
  });
});
