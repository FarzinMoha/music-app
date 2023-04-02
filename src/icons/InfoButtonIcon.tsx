import React from "react";
interface props {
    width: number;
    height: number;
    color?: string;
  }
  
  const InfoButtonIcon = ({ width, height, color }: props) => {
    return (
      <svg
        width={width}
        height={height}
      viewBox="0 0 20 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5.25C1.25736 5.25 0.25 4.24264 0.25 3C0.25 1.75736 1.25736 0.75 2.5 0.75C3.74264 0.75 4.75 1.75736 4.75 3C4.75 4.24264 3.74264 5.25 2.5 5.25ZM10 5.25C8.75736 5.25 7.75 4.24264 7.75 3C7.75 1.75736 8.75736 0.75 10 0.75C11.2426 0.75 12.25 1.75736 12.25 3C12.25 4.24264 11.2426 5.25 10 5.25ZM17.5 5.25C16.2574 5.25 15.25 4.24264 15.25 3C15.25 1.75736 16.2574 0.75 17.5 0.75C18.7426 0.75 19.75 1.75736 19.75 3C19.75 4.24264 18.7426 5.25 17.5 5.25Z"
        fill={color}
      />
    </svg>
  );
};

export default InfoButtonIcon;
