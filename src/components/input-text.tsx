import React from "react";

import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import Icon from "./icon";

export const inputTextVariants = cva(`
    transition-
    border rounded-xl border-gray-500 
    focus-within:border-yellow-dark
    flex items-center
    justify-center gap-2
    outline-none
    `, {
    variants: {
        size: {
            md: "py-3 px-3 w-full max-w-85 h-12"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        size: "md",
        disabled: false
    }
})

export const textInputIconVariants = cva("", {
    variants: {
        variant: {
            primary: "fill-yellow"
        },
        size: {
            md: "w-5 h-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})

interface InputTextProps extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
        icon?: React.ComponentProps<typeof Icon>["svg"]
    }

export default function inputText({
    size,
    disabled,
    className,
    icon: IconComponent,
    ...props
}: InputTextProps) {
    return (
        <label
            className={cx(
                inputTextVariants({ size, disabled }),
                className
            )}
        >
            {IconComponent && (
                <Icon
                    svg={IconComponent}
                    className={textInputIconVariants()}
                />
            )}

            <input
                className={cx(
                    textVariants(),
                    "w-full outline-none bg-transparent"
                )}
                {...props}
            />
        </label>
    );
}