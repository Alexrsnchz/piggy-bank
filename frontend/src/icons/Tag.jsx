const Tag = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    strokeWidth="1.3"
    {...props}
  >
    {' '}
    <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"></path>{' '}
    <path d="M11 3h5a3 3 0 0 1 3 3v11"></path>{' '}
  </svg>
);

export default Tag;