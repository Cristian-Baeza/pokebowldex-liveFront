import { render, screen } from '@testing-library/react';
import { FoodPokemonCard } from '@/components/FoodPokemonCard';

describe('FoodPokemonCard', () => {
  const props = {
    name: 'Snorlax',
    image: '/snorlax.png',
  };

  it('renders the Pokémon name and image', () => {
    render(<FoodPokemonCard {...props} />);

    expect(screen.getByText(/Snorlax/i)).toBeInTheDocument();

    const img = screen.getByAltText(/Snorlax/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.image);
  });

  it('wraps the card in a link with correct href', () => {
    render(<FoodPokemonCard {...props} />);

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/pokemon/Snorlax');
  });
});
