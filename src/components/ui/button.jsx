import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}) {
  const variants = {
    default: "border-transparent",
    outline: "border border-white/20 bg-transparent text-white hover:bg-white/10",
  };

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 py-3 text-base",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/40 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
