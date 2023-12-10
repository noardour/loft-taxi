import { render } from '@testing-library/react';
import Map from './Map';

describe('map', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<Map />);
    getByTestId('map');
  });
});
