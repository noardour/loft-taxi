import { render } from '@testing-library/react';
import Logo from './Logo';

describe('logo', () => {
  it('renders without error', () => {
    const { getByTestId } = render(<Logo />);
    getByTestId('logo');
  });
});
