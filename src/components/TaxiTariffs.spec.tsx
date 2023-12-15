import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaxiTariffs from './TaxiTariffs';

describe('TaxiTariffs', () => {
  it('renders without errors', () => {
    render(<TaxiTariffs />);

    expect(screen.getAllByTestId('taxi-tariff').length).toEqual(3);
  });

  it('select elements', async () => {
    const onChange = vi.fn();
    render(<TaxiTariffs onChange={onChange} />);

    const taxiTariffsElements = await screen.findAllByTestId('taxi-tariff');
    await userEvent.click(taxiTariffsElements[1]);

    expect(onChange).toBeCalled();
  });
});
