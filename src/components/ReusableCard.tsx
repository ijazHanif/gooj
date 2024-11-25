import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { ReusableCardProps } from '../../types/reusableCard';
import { cn } from '@/lib/utils';
import Text from './Text';
import { Button } from './ui/button';

const ReusableCard: React.FC<ReusableCardProps> = ({
  cardClassName,
  title,
  titleclassName,
  description,
  descriptionclassName,
  cardData,
  cardType = 'default',
  cardContentClassName,
  cardFooterClassName,
  footerTextClassName,
  badgeClassName,
  buttonContainerClassName,
  cardButton,
  layoutGridClassName,
  buttonIcon,
  buttonVariant,
  buttonClassName
}) => {
  const cards =
    cardType === 'default' ? (
      cardData?.map((item, index) => {
        return (
          <Card
            className={cn('w-full relative overflow-hidden', cardClassName)}
            key={index}
          >
            {/* Header */}
            <CardHeader>
              {item.badge && (
                <span
                  className={cn(
                    'px-2 py-1 text-xs text-center rounded-md font-medium uppercase absolute top-4 -right-6 rotate-45 min-w-28  ',
                    item.badge === 'Popular'
                      ? 'bg-destructive/30 text-destructive '
                      : item.badge === 'New'
                      ? 'bg-green-600/30 text-green-600'
                      : '',
                    badgeClassName,
                  )}
                >
                  {item.badge}
                </span>
              )}
              <CardTitle className={cn(titleclassName)}>{item.title}</CardTitle>
              <CardDescription className={cn(descriptionclassName)}>
                {item.description}
              </CardDescription>
            </CardHeader>

            {/* Content (Optional) */}
            <CardContent className={cn(cardContentClassName)}>
              {item.content}
            </CardContent>

            {/* Footer */}
            {item.footerText || item.button ? (
              <CardFooter className={cn(cardFooterClassName)}>
                {item.footerText && (
                  <span
                    className={cn(
                      'text-sm text-muted-foreground',
                      footerTextClassName,
                    )}
                  >
                    {item.footerText}
                  </span>
                )} 
                {cardButton || buttonIcon && (
                  <div className={cn(buttonContainerClassName)}>
                    <Button asChild  icon={buttonIcon} variant={buttonVariant} className={buttonClassName}> 
                        {cardButton}
                    </Button>
                  </div>
                )}
              </CardFooter>
            ) : null}
          </Card>
        );
      })
    ) : (
      <>Please Select Card Type</>
    );

  return (
    <section>
      {title && (
        <Text
          as='h2'
          className={cn('mb-8 text-center', titleclassName)}
        >
          {title}
        </Text>
      )}
      {description && (
        <Text
          className={cn(
            'mb-8 text-center md:max-w-screen-xl md:mx-auto',
            descriptionclassName,
          )}
        >
          {description}
        </Text>
      )}
      <div className={cn(layoutGridClassName)}>{cards}</div>
    </section>
  );
};

export default ReusableCard;
