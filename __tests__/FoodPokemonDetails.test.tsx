import { render, screen } from '@testing-library/react';
import { FoodPokemonDetail } from '@/components/FoodPokemonDetail';

describe('FoodPokemonDetail', () => {
  const defaultProps = {
    name: 'Snorlax',
    image: '/snorlax.png',
    types: ['normal'],
    height: 21,
    weight: 460,
  };

  it('renders the Pokémon name and details', () => {
    render(<FoodPokemonDetail {...defaultProps} />);

    expect(screen.getByText(/Snorlax/i)).toBeInTheDocument();
    expect(screen.getByText(/Everything. Seriously, everything!/i)).toBeInTheDocument();
    expect(screen.getByText(/normal/i)).toBeInTheDocument();
    expect(screen.getByText(/21 feet/i)).toBeInTheDocument();
    expect(screen.getByText(/460kg/i)).toBeInTheDocument();
  });

  it('renders the Pokémon image with correct src', () => {
    render(<FoodPokemonDetail {...defaultProps} />);

    const img = screen.getByAltText(/Snorlax/i);

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', defaultProps.image);
  });

  it('includes a link to return to the homepage', () => {
    render(<FoodPokemonDetail {...defaultProps} />);

    const button = screen.getByRole('button', { name: /Back to Pokebowldex/i });

    expect(button).toBeInTheDocument();
  });
});
