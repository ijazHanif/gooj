interface CardDataProps {
  title?: string;
  description?: string;
  badge?: string | null; // --- add null to the type
  link?: string;
  content?: React.ReactNode | string;
  button?: boolean;
  cta?: string;
  footerText?: string;
}

export interface ReusableCardProps {
  title?: string; // Card title
  description?: string; // Card description
  cardData?: CardDataProps[]; // Array of card data
  cardType?: string; // Card type (default, custom, etc.)
  badgeClassName?: string; // Custom styling for badge
  cardClassName?: string; // Custom styling for the card
  titleclassName?: string; // Custom styling for the card title
  descriptionclassName?: string; // Custom styling for the card description
  cardContentClassName?: string; // Custom styling for the card content
  cardFooterClassName?: string; // Custom styling for the card footer
  footerTextClassName?: string; // Custom styling for the footer text
  buttonContainerClassName?: string; // Custom styling for the button container
  cardButton?: React.ReactNode;
  layoutGridClassName?: string;
  buttonIcon?: React.ReactNode;
  buttonVariant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  buttonClassName?: string;
}
