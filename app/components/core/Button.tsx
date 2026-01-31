import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
}

const Button = ({ type = "button", ...props }: Props) => {
  return (
    <button type={type} {...props}>
      {props.label}
      {props.children}
    </button>
  );
};

export default Button;
