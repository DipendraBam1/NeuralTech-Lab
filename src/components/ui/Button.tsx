import { cn } from '@/lib/cn'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'outline' }

export default function Button({ variant = 'primary', className, ...props }: Props) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-colors',
        variant === 'primary' && 'bg-primary text-white shadow-md shadow-primary/30 hover:bg-secondary',
        variant === 'outline' && 'border border-neutral/30 bg-white text-ink hover:border-secondary dark:border-dark-border dark:bg-dark-bg-light dark:text-dark-text',
        className,
      )}
      {...props}
    />
  )
}
