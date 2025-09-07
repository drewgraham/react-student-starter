interface Props {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ page, pageCount, onPageChange }: Props) => {
  if (pageCount <= 1) return null;
  return (
    <nav aria-label="Pagination">
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>
        Page {page} of {pageCount}
      </span>
      <button onClick={() => onPageChange(page + 1)} disabled={page === pageCount}>
        Next
      </button>
    </nav>
  );
};

export default Pagination;
