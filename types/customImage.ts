import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

export interface CustomImageProps {
    src: StaticImageData | string;
    alt?: string;
    width: number;
    height: number;
    priority?: boolean;
    imageClassName?: string;
    imageContainerClassName?: string;
    style?: CSSProperties;
  }