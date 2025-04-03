import { render, screen, waitFor } from '@testing-library/react';
import { FoodPokemonList } from '@/components/FoodPokemonList';
import { Pagination } from '@/components/Pagination';
import { fetchFoodPokemonList } from '@/lib/api';

jest.mock('@/components/FoodPokemonCard', () => ({
  FoodPokemonCard: ({ name }: { name: string }) => <li>{name}</li>,
}));

jest.mock('@/components/Pagination', () => ({
  Pagination: () => <div>Pagination Component</div>,
}));

jest.mock('@/components/Loading', () => ({
  Loading: () => <div>Loading...</div>,
}));

jest.mock('@/lib/api', () => ({
  fetchFoodPokemonList: jest.fn(),
}));

const mockData = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `Pokemon${i + 1}`,
  image: `/images/pokemon${i + 1}.png`,
}));

describe('FoodPokemonList', () => {
  beforeEach(() => {
    (fetchFoodPokemonList as jest.Mock).mockResolvedValue(mockData);
  });

  it('shows loading initially', () => {
    render(<FoodPokemonList />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('renders 8 visible Pokémon and pagination after loading', async () => {
    render(<FoodPokemonList />);

    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
    });

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(8);

    expect(screen.getByText(/Pagination Component/i)).toBeInTheDocument();
  });
});
