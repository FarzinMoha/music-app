interface props {
  width: number;
  height: number;
  color?: string;
}

const ProfileIcon = ({ width, height, color }: props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5 15C27.5 19.1421 24.1421 22.5 20 22.5C15.8579 22.5 12.5 19.1421 12.5 15C12.5 10.8579 15.8579 7.5 20 7.5C24.1421 7.5 27.5 10.8579 27.5 15Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM20 2.5C10.335 2.5 2.5 10.335 2.5 20C2.5 24.1336 3.93314 27.9324 6.32965 30.9267C8.10732 28.0631 12.0116 25 20 25C27.9884 25 31.8927 28.0631 33.6704 30.9268C36.0669 27.9324 37.5 24.1336 37.5 20C37.5 10.335 29.665 2.5 20 2.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ProfileIcon;
