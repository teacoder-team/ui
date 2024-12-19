import { Slot } from '@radix-ui/react-slot'
import { RiLoader2Fill } from '@remixicon/react'
import { type VariantProps, cva } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import '../styles/variables.css'
import { cn } from '../utils/tw-merge'

const buttonVariants = cva(
	'relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out disabled:pointer-events-none disabled:shadow-none disabled:opacity-70 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				primary:
					'bg-gradient-to-b from-sky-600 to-sky-700 text-white hover:from-sky-700 hover:to-sky-700',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-white text-black hover:bg-neutral-100',
				ghost: 'border-transparent shadow-none hover:bg-accent hover:text-accent-forenground',
				link: 'text-primary underline-offset-4 hover:underline',
				destructive:
					'bg-gradient-to-b from-orange-600 to-orange-700 text-destructive-foreground hover:from-orange-700 hover:to-orange-700',
			},
			size: {
				default: 'h-9 px-4 py-1',
				sm: 'h-8 rounded-md px-3',
				xs: 'h-7 rounded-md px-2 text-xs',
				lg: 'h-11 rounded-md px-5',
				icon: 'h-8 w-8',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default',
		},
	}
)

interface ButtonProps
	extends ComponentPropsWithoutRef<'button'>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	isLoading?: boolean
	loadingText?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			asChild,
			isLoading = false,
			loadingText,
			className,
			disabled,
			variant,
			size,
			children,
			...props
		}: ButtonProps,
		forwardedRef
	) => {
		const Component = asChild ? Slot : 'button'

		return (
			<Component
				ref={forwardedRef}
				className={cn(buttonVariants({ variant, size }), className)}
				disabled={disabled || isLoading}
				{...props}
			>
				{isLoading ? (
					<span className='pointer-events-none flex shrink-0 items-center justify-center gap-1.5'>
						<RiLoader2Fill
							className='size-4 shrink-0 animate-spin'
							aria-hidden='true'
						/>
						<span className='sr-only'>
							{loadingText ? loadingText : 'Загрузка'}
						</span>
						{loadingText ? loadingText : children}
					</span>
				) : (
					children
				)}
			</Component>
		)
	}
)

Button.displayName = 'Button'

export { Button, buttonVariants, type ButtonProps }
