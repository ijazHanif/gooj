import Image from 'next/image';
import { forwardRef } from 'react';
import { CustomImageProps } from '../../types/customImage';
import { cn } from '@/lib/utils';

// Forward ref to the Image component
const CustomImage = forwardRef<HTMLImageElement, CustomImageProps>(
  (
    {
      src,
      alt = 'bluell image', // Default alt text for accessibility
      width = 300, // Default width
      height = 200, // Default height
      imageClassName = '',
      imageContainerClassName = '',
      priority = true,
      style = {},
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn(imageContainerClassName)}>
        <Image
          src={src}
          alt={alt}
          width={width} // Use default or provided width
          height={height} // Use default or provided height
          priority={priority}
          ref={ref}
          {...props}
          className={cn('object-cover', imageClassName)}
          style={style}
        />
      </div>
    );
  },
);

// Memoize the component to prevent unnecessary re-renders
CustomImage.displayName = 'CustomImage';
export default CustomImage;
