import React from "react"
import { cva, cx, type VariantProps } from "class-variance-authority"
import Icon from "./icon";
import { textVariants } from "./text";
import { getToday } from "../helpers/date";

import CalendarIcon from "../assets/icons/calendar.svg?react"
import CaretDownIcon from "../assets/icons/caretdown.svg?react"

// eslint-disable-next-line react-refresh/only-export-components
export const buttonDateSelectVariants = cva(`
        flex items-center cursor-pointer
        transition border
        rounded-xl
        bg-transparent
        border-gray-500
        focus-within:border-yellow-dark
        gap-2
`, {
    variants: {
        size: {
            sm: "w-full max-w-43.5 h-14 p-3",
            md: "w-full max-w-85 h-12 p-3"
        },
        disabled: {
            true: 'opacity-50 pointer-events-none'
        }
    },
    defaultVariants: {
        size: 'md',
        disabled: false
    }

})

// eslint-disable-next-line react-refresh/only-export-components
export const buttonInputIconVariants = cva("shrink-0", {
    variants: {
        variant: {
            primary: "fill-yellow",
            secondary: "fill-gray-300"
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


interface ButtonDateSelectProps
    extends Omit<React.ComponentProps<"input">, 'size' | 'disabled' | 'type'>,
    VariantProps<typeof buttonDateSelectVariants> {
        icon?: React.ComponentProps<typeof Icon>["svg"]
    }


export default function ButtonDateSelect({
    size,
    disabled,
    className,
    icon: IconComponent = CalendarIcon,
    ...props
}: ButtonDateSelectProps) {

    function handleOpenPicker(event: React.MouseEvent<HTMLDivElement>) {
        const input = event.currentTarget.querySelector("input")
        input?.showPicker()
    }

    return (
        <div
            className={buttonDateSelectVariants({ size, disabled, className })}
            onClick={handleOpenPicker}
        >
            <Icon svg={IconComponent} className={buttonInputIconVariants()} />

            <input
                type="date"
                min={getToday()}
                disabled={!!disabled}
                className={cx(
                    textVariants({ variant: "text-md" }),
                    `flex-1 min-w-0 bg-transparent outline-none cursor-pointer
                    scheme-dark
                    [&::-webkit-calendar-picker-indicator]:hidden`
                )}
                {...props}
            />

            <Icon
                svg={CaretDownIcon}
                className={buttonInputIconVariants({ variant: "secondary" })}
            />
        </div>
    );
}
