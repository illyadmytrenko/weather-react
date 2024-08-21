import clsx from "clsx";

/**
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline'
 * }} props
 */

export function UiButton({ children, className, size, variant, onClick }) {
  const buttonClassName = clsx(
    className,
    {
      md: "rounded px-6 py-2 text-sm",
    }[size],
    {
      lime: "bg-lime-400 hover:bg-lime-500 border-2 border-solid border-gray-500",
      orange:
        "bg-orange-400 hover:bg-orange-500 border-2 border-solid border-gray-600",
    }[variant]
  );

  return (
    <button className={buttonClassName} onClick={onClick} type="button">
      {children}
    </button>
  );
}
