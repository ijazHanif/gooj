import { cn } from '@/lib/utils';
import React from 'react';

const MaxWidth: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
        className,
      )}
    >
      {children}
    </div>
  );
};

MaxWidth.displayName = 'MaxWidth';
export default MaxWidth;
