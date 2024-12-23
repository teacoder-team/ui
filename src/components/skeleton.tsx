import { HTMLAttributes } from 'react'

import { cn } from '../utils/tw-merge'

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('animate-pulse rounded-lg bg-primary/10', className)}
			{...props}
		/>
	)
}

export { Skeleton }
