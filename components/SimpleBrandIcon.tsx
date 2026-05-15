import type { SimpleIcon } from "simple-icons";

type SimpleBrandIconProps = {
  icon: SimpleIcon;
  className?: string;
  size?: number;
  title?: string;
};

export function SimpleBrandIcon({ icon, className, size = 24, title }: SimpleBrandIconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      fill="currentColor"
      height={size}
      role={title ? "img" : undefined}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} />
    </svg>
  );
}
