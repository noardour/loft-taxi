import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import router from '../router';

describe('Header', () => {
  it('renders without errors', () => {
    render(<RouterProvider router={router} />);
    screen.getByTestId('logo');
  });
});
