import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({ variant, children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${className} ${styles.btn}`}
      data-variant={variant || "primary"}
    >
      {children}
    </button>
  );
};

export default Button;
