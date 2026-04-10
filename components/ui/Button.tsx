import React, { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "px-4 py-2 rounded-3xl cursor-pointer font-semibold text-base transition-all ease-in-out duration-150 hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    />
  );
}

export default Button;
