import React from "react";

const sizes = {
  "3xl": "text-[56px] font-bold md:text-5xl sm:text-[42px]",
  "2xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  xl: "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  s: "text-lg font-semibold",
  md: "text-xl font-bold",
  xs: "text-base font-semibold",
  lg: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-notosans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
