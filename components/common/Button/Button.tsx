import classNames from "classnames";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./index.scss";
import { Color } from "../Color";

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  background: Color;
  color: Color;
  size: "lg" | "md" | "sm";
  border: boolean;
  classNameList?: string[];
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({
  background,
  color,
  size,
  border,
  classNameList = [],
  children,
  onClick,
  ...props
}: ButtonProps) {
  let fontSize;
  switch (size) {
    case "sm":
      fontSize = "sm";
      break;
    case "md":
      fontSize = "xl";
      break;
    case "lg":
      fontSize = "xl";
      break;
  }
  return (
    <button
      className={classNames(
        border ? `border border-${color}` : "border border-inherit",
        `background-${background}`,
        `text-${color}`,
        `text-${fontSize}`,
        `rounded`,
        `p-1`,
        classNameList
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
