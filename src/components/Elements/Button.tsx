import { ButtonHTMLAttributes } from "react";

import { btn, primary } from "./css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: string;
};

export const Button = (props: Props) => {
  console.log("Hello");
  return <button css={[btn, primary]}>Button</button>;
};
