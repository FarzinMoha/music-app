interface props {
  width: number;
  height: number;
  color?: string;
}
const RightArrowIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6C0 5.58579 0.335786 5.25 0.75 5.25L9.43934 5.25L6.21967 2.03033C5.92678 1.73744 5.92678 1.26256 6.21967 0.969669C6.51256 0.676776 6.98744 0.676776 7.28033 0.969669L11.7803 5.46967C12.0732 5.76256 12.0732 6.23744 11.7803 6.53033L7.28033 11.0303C6.98744 11.3232 6.51256 11.3232 6.21967 11.0303C5.92678 10.7374 5.92678 10.2626 6.21967 9.96967L9.43934 6.75L0.75 6.75C0.335786 6.75 0 6.41421 0 6Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrowIcon;
