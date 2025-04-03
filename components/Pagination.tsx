type Props = {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

export function Pagination({ page, totalPages, onPageChange }: Props) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 text-center">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="font-retro text-sm sm:text-base px-4 py-2 bg-purple-600 border-2 border-black text-white rounded disabled:opacity-50 transition hover:scale-105 duration-300"
      >
        Previous
      </button>

      <span className="font-retro text-sm sm:text-base px-3 py-1 border-2 border-black font-medium bg-white text-black rounded">
        {page} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="font-retro text-sm sm:text-base px-4 py-2 bg-purple-600 border-2 border-black text-white rounded disabled:opacity-50 transition hover:scale-105 duration-300"
      >
        Next
      </button>
    </div>
  );
}
