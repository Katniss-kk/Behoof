const ArrowSvg = ({fill}: {fill?: string}) => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.74996L6.58333 6.58329L0.75 12.4166"
        stroke="#FDFDFD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowSvg