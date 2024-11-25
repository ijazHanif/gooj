import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import CustomImage from '../CustomImage';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode | StaticImageData | string; 
  iconPosition?: 'start' | 'end';
  imgWidth?: number;
  imgHeight?: number;
  alt?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon,
      iconPosition = 'start',
      imgWidth = 32,
      imgHeight = 32,
      alt = 'bluell image',
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

  // Explicitly typing the parameter for the type guard
  const isImageIcon = (
    icon: unknown,
  ): icon is StaticImageData | string =>
    typeof icon === 'string' || (typeof icon === 'object' && icon !== null && 'src' in icon);

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === 'start' && (
          <span className={cn(children ? 'mr-2' : '')}>
            {isImageIcon(icon) ? (
              <CustomImage
                src={icon}
                alt={alt}
                width={imgWidth}
                height={imgHeight}
              />
            ) : (
              icon
            )}
          </span>
        )}
        {children}
        {icon && iconPosition === 'end' && (
          <span className={cn(children ? 'ml-2' : '')}>
            {isImageIcon(icon) ? (
              <CustomImage
                src={icon}
                alt={alt}
                width={imgWidth}
                height={imgHeight}
              />
            ) : (
              icon
            )}
          </span>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };