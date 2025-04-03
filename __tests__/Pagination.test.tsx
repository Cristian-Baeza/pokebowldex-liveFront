import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '@/components/Pagination';

describe('Pagination component', () => {
  const setup = (page: number, totalPages: number, onPageChange = jest.fn()) => {
    render(<Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />);
    return { onPageChange };
  };

  it('renders previous and next buttons with correct text', () => {
    setup(2, 3);

    expect(screen.getByText(/Previous/i)).toBeInTheDocument();
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
    expect(screen.getByText('2 of 3')).toBeInTheDocument();
  });

  it('calls onPageChange with the correct values when buttons are clicked', () => {
    const { onPageChange } = setup(2, 5);

    fireEvent.click(screen.getByText(/Previous/i));
    expect(onPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText(/Next/i));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('disables Previous button on first page', () => {
    setup(1, 5);

    expect(screen.getByText(/Previous/i)).toBeDisabled();
    expect(screen.getByText(/Next/i)).not.toBeDisabled();
  });

  it('disables Next button on last page', () => {
    setup(5, 5);

    expect(screen.getByText(/Next/i)).toBeDisabled();
    expect(screen.getByText(/Previous/i)).not.toBeDisabled();
  });
});
