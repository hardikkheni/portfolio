import { ReactNode } from 'react';

interface SkillBadgeProps extends React.ComponentPropsWithoutRef<'span'> {}

export default function SkillBadge({ children, className }: SkillBadgeProps) {
	return (
		<span
			className={
				'inline-flex items-center rounded-md text-lg font-medium' +
				` ${className}`
			}
		>
			{children}
		</span>
	);
}
