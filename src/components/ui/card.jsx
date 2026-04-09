import React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Card({ className = "", children, ...props }) {
  return (
    <div className={cn("rounded-xl border", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}
