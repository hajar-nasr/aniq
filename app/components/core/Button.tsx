import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
}

const Button = ({ type = "button", ...props }: Props) => {
  return (
    <button
      type={type}
      {...props}
      className={`cursor-pointer ${props.className}`}
    >
      {props.label}
      {props.children}
    </button>
  );
};

export default Button;
