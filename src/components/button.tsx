import React from "react"
import Text from "./text"
import { cva, type VariantProps } from "class-variance-authority"


// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer
    transtion rounded-lg
`, {
    variants: {
        variant: {
            primary: "bg-yellow hover:border-2 border-yellow-light"
        },
        size: {
            md: "h-14 w-full max-w-[324px] py-4.5 px-6"
        },
        disabled: {
            true: 'opacity-50 pointer-events-none'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        disabled: false
    }

})


interface ButtonProps 
    extends Omit<React.ComponentProps<"button">, 'size' | 'disabled'>, 
    VariantProps<typeof buttonVariants> {}


export default function Button({
    variant,
    size,
    disabled,
    className,
    children,
    ...props
}): ButtonProps {
    return ( <button className={buttonVariants({
            variant,
            size, 
            disabled, 
            className})} 
            {...props}>
           
            <Text variant="text-sm-bold" className="text-gray-900 uppercase">{children}</Text>
            
        </button>
    );
}