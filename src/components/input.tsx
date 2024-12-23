import { type ComponentProps, forwardRef } from 'react'
import { cn } from '../utils/tw-merge'

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:dark:ring-sky-700/30 md:text-sm',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }
