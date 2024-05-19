import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-lg",
} as const;
const variants = {
  fill: {
    green_400: "bg-green-400 text-white-A700",
    light_blue_900: "bg-light_blue-900 text-white-A700",
    amber_400: "bg-amber-400 text-gray-900",
  },
} as const;
const sizes = {
  sm: "h-[43px] px-[15px] text-xl",
  md: "h-[50px] px-[35px] text-lg",
  xs: "h-[38px] px-2 text-base",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "amber_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer font-semibold ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
