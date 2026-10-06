import React from "react"
import Text from "./text"
import { cva, type VariantProps } from "class-variance-authority"


// eslint-disable-next-line react-refresh/only-export-components
export const buttonTimeSelectVariants = cva(`
    flex items-center justify-center cursor-pointer
    transtion border rounded-lg
`, {
    variants: {
        variant: {
            primary: `
                bg-gray-600
                border-gray-500
                hover:bg-gray-500
            `,
            secondary: `
                bg-gray-600
                border-yellow
                hover:bg-gray-500
            `
        },
        size: {
            md: "h-10 w-fit max-w-19.5 py-2 px-5"
        },
        disabled: {
            true: 'opacity-50 pointer-events-none bg-transparent'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        disabled: false
    }

})


interface ButtonTimeSelectProps 
    extends Omit<React.ComponentProps<"button">, 'size' | 'disabled'>, 
    VariantProps<typeof buttonTimeSelectVariants> {}


export default function ButtonTimeSelect({
    variant,
    size,
    disabled,
    className,
    children,
    ...props
}: ButtonTimeSelectProps) {

    return ( <button className={buttonTimeSelectVariants({
            variant,
            size, 
            disabled, 
            className})} 
            {...props}>
           
            <Text
                color={
                    variant === "secondary" ? "yellow-base" : "gray-200"}
                >
                {children}
            </Text>
            
        </button>
    );
}