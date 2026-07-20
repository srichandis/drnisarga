import { Film, Camera, Globe, type LucideIcon } from "lucide-react";

export interface Testimonial {
  id: string;
  platform: "youtube" | "instagram" | "kims-website";
  title: string;
  description: string;
  embedUrl: string | null;
  sourceUrl: string;
  thumbnailUrl: string | null;
  date: string;
}

export const platformConfig: Record<
  Testimonial["platform"],
  { label: string; color: string; bg: string; icon: LucideIcon }
> = {
  youtube: {
    icon: Film,
    label: "YouTube",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  instagram: {
    icon: Camera,
    label: "Instagram",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  "kims-website": {
    icon: Globe,
    label: "KIMS Hospitals",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
};
