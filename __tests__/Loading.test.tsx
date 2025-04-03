import { render, screen } from '@testing-library/react';
import { Loading } from '@/components/Loading';

describe('Loading', () => {
  it('renders the loading message', () => {
    render(<Loading />);

    const heading = screen.getByText(/LOADING HUNGRY POKEMON/i);

    expect(heading).toBeInTheDocument();
  });

  it('has the correct styles', () => {
    render(<Loading />);

    const heading = screen.getByText(/LOADING HUNGRY POKEMON/i);
    expect(heading).toHaveClass('font-retro');
    expect(heading).toHaveClass('text-3xl');
    expect(heading).toHaveClass('bg-purple-700');
  });
});
