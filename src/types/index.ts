import { ReactNode } from "react";

export type DeviceType = "desktop" | "tablet" | "mobile";

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}
