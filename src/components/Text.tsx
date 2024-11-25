import React from "react";
import { cn } from "@/lib/utils";
import { TypographyProps } from "../../types/text"; 

const Text: React.FC<TypographyProps> = ({ as = 'p', className, children, style }) => {
  const baseClasses = {
    h1: 'text-5xl font-extrabold dark:text-white',
    h2: 'text-4xl font-bold dark:text-white',
    h3: 'text-3xl font-bold dark:text-white',
    h4: 'text-2xl font-bold dark:text-white',
    h5: 'text-xl font-bold dark:text-white',
    h6: 'text-lg font-bold dark:text-white',
    p: 'text-base',
  };

  const Component = as;

  return (
    <Component className={cn(baseClasses[as as keyof typeof baseClasses] || baseClasses.p, className)} style={style}>
      {children}
    </Component>
  );
};

export default Text;