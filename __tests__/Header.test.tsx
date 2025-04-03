import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';

// mock Next/image to behave like a normal img in tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('Header', () => {
  it('renders the title', () => {
    render(<Header />);

    expect(screen.getByText(/PokeBowlDex/i)).toBeInTheDocument();
  });

  it('renders the Poké Bowl image with alt text', () => {
    render(<Header />);
    const image = screen.getByAltText(/Poké Bowl/i);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/poke-bowl.png');
  });
});
