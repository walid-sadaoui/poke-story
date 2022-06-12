import React, { FunctionComponent } from "react";
import classNames from "classnames";
// import Icon from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: string;
  size?: ButtonSize;
  value?: string;
  variant?: Variants;
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum Variants {
  BASE = "base",
  NEUTRAL = "neutral",
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className = "",
  icon,
  size = ButtonSize.MEDIUM,
  value,
  variant = Variants.NEUTRAL,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(
        "py-2 px-4 border-b-4 bg-yellow-700 text-white font-sans border-yellow-600 hover:border-yellow-600 rounded disabled:text-gray-500 disabled:cursor-not-allowed",
        className
      )}
      {...otherProps}
    >
      {/* {icon && <Icon icon={icon} size={size} aria-hidden='true' />} */}
      {value ? <span className={icon && "ml-2"}>{value}</span> : children}
    </button>
  );
};

export default Button;
