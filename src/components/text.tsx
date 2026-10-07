import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// eslint-disable-next-line react-refresh/only-export-components
export const textVariants = cva("font-sans", {
    variants: {
        variant: {
            "title-lg-bold": "text-2xl leading-6 font-bold",
            "title-sm-bold": "text-sm leading-5 font-bold",
            "text-md": "text-base leading-6 font-normal",
            "text-md-bold": "text-base leading-6 font-bold",
            "text-sm": "text-sm leading-6 font-normal",
            "text-sm-bold": "text-sm leading-6 font-bold"
        },
        color: {
            "gray-100": "text-gray-100",
            "gray-300": "text-gray-300",
            "gray-200": "text-gray-200",
            "gray-500": "text-gray-500",
            "yellow-base": "text-yellow"
        }
    },
    defaultVariants: {
        variant: "text-md",
        color: "gray-300"
    }
})

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}


export default function Text({as = "span", variant, color, className, children, ...props}: TextProps) {
    return React.createElement(
        as,
        {
            className: textVariants(({variant, 
                color,
                className})),
            ...props,
        },
        children
    )
}