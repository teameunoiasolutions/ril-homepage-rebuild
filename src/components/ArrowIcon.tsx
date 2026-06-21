import type { SVGProps } from 'react'

export function ArrowIcon({ className = 'arrow-icon', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 10"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M1 5H16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path
        d="M12 1L16 5L12 9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
