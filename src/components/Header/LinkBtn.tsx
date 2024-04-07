import React from "react";
import { Link } from "react-router-dom";

interface LinkBtnProps {
  className?: string;
  to: string;
  text: string;
}

const LinkBtn: React.FC<LinkBtnProps> = ({
  text = "BUTTON",
  to = "/",
  className = "",
  ...props
}) => {
  return (
    <>
      <Link
        to={to}
        className={`${className} text-white text-xl underline-none hover:text-zinc-400 transition-all
        `}
        {...props}
      >
        {text}
      </Link>
    </>
  );
};

export default LinkBtn;
