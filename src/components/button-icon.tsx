import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";


interface ButtonIconProps
  extends Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
}

export const buttonIconVariants = cva("cursor-pointer", {
  variants: {
    variant: {
      none: "",
      primary: "fill-yellow hover:fill-yellow-dark",
    },
    size: {
      sm: "w-8 h-8",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export default function ButtonIcon({
  variant,
  size,
  className,
  icon,
  ...props
}: ButtonIconProps) {

  return (
    <button
      className={buttonIconVariants({ className, variant, size })}
      {...props}
    >
      <Icon className={buttonIconVariants({ size, variant })} svg={icon} />
    </button>
  );
}