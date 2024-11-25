interface FooterLink {
  label?: string;
  href?: string;
  icon?: JSX.Element;
}

export interface FooterSection {
  type: string;
  links?: FooterLink[];
  text?: string;
}
