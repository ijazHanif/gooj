export interface TypographyProps {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'; // Restrict to specific keys
    className?: string; // Additional classes
    children: React.ReactNode; // Content to render
    style?: React.CSSProperties;
  }