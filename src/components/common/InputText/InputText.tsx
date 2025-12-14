import type { InputHTMLAttributes } from "react";
import styles from "./InputText.module.css";

const InputText = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} type="text" className={styles.input} />;
};

export default InputText;
