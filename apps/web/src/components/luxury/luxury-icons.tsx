import type { SVGProps } from "react";

function IconBase({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className="shrink-0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function StoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 10.5h16" />
      <path d="M5.5 10.5V19h13V10.5" />
      <path d="M6.5 6h11l1.5 4.5h-14z" />
      <path d="M9 19v-5h6v5" />
    </IconBase>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M20 20a8 8 0 1 0-16 0" />
      <circle cx="12" cy="8" r="3.2" />
    </IconBase>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 20s-7.5-4.7-9.2-9.1C1.5 7.3 3.4 4.6 6.3 4.2c1.6-.2 3.2.5 4.2 1.8 1-1.3 2.6-2 4.2-1.8 2.9.4 4.8 3.1 3.5 6.7C19.5 15.3 12 20 12 20Z" />
    </IconBase>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="5.4" />
      <path d="m16 16 4 4" />
    </IconBase>
  );
}

export function BagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M6.5 8h11l-1 11h-9z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </IconBase>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m7 10 5 5 5-5" />
    </IconBase>
  );
}
