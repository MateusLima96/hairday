import React from "react"
import { cx } from "class-variance-authority"


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MainContentProps extends React.ComponentProps<"main">{}

export default function MainContent({children, className, ...props}: MainContentProps) {
    return <main className={cx(`
        relative p-3
        flex gap-3
        flex-col md:flex-row
        max-w-360
        mx-auto
    `, className)} {...props}>
        {children}
    </main>

}