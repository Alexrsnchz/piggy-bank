const Target = (props) => (
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
    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>{' '}
    <path d="M12 7a5 5 0 1 0 5 5"></path>{' '}
    <path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path>{' '}
    <path d="M15 6v3h3l3 -3h-3v-3z"></path> <path d="M15 9l-3 3"></path>{' '}
  </svg>
);

export default Target;
