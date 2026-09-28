import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// eslint-disable-next-line react-refresh/only-export-components
export const textVariants = cva("font-sans text-gray-400", {
    variants: {
        variant: {
            "title-lg-bold": "text-2xl leading-6 font-bold",
            "title-sm-bold": "text-sm leading-5 font-bold",
            "text-md": "text-base leading-6 font-normal",
            "text-sm": "text-sm leading-6 font-normal",
            "text-sm-bold": "text-sm leading-6 font-bold"
        }
    },
    defaultVariants: {
        variant: "text-md"
    }
})

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode
}


export default function Text({as = "span", variant, className, children, ...props}: TextProps) {
    return React.createElement(
        as,
        {
            className: textVariants(({variant, className})),
            ...props,
        },
        children
    )
}