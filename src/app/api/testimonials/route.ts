import { NextResponse } from "next/server";
import type { Testimonial } from "@/data/testimonials";

export const dynamic = "force-dynamic";

// Known testimonial sources for Dr. Nisarga from KIMS Hospitals
const KNOWN_SOURCES = [
  {
    id: "youtube-1",
    type: "youtube" as const,
    url: "https://www.youtube.com/watch?v=dqsh22nFPrA",
    title: "Mrs. Meena's journey after Complex Heart Valve Replacement Surgery",
    description:
      "A 25-year-old patient from Hyderabad shares her experience after a high-risk redo heart valve replacement surgery performed by Dr. Nisarga and his team at KIMS Kondapur.",
  },
  {
    id: "instagram-1",
    type: "instagram" as const,
    url: "https://www.instagram.com/p/DEgxWPto5Oa/",
    title: "Treatment of Mediastinal Teratoma",
    description:
      "Successful care of a 15-year-old patient by Dr. Nisarga and Dr. Rohan Reddy C at KIMS Hospitals.",
  },
  {
    id: "instagram-2",
    type: "instagram" as const,
    url: "https://www.instagram.com/reel/DXwDekVlZd4/",
    title: "Complex Heart Valve & Blockage Procedure",
    description:
      "A critically ill patient's successful recovery after a high-risk cardiac procedure under Dr. Nisarga's leadership at KIMS Hospitals.",
  },
  {
    id: "instagram-3",
    type: "instagram" as const,
    url: "https://www.instagram.com/reel/DS1swWBjX79/",
    title: "Heart Bypass at 72",
    description:
      "A 72-year-old patient's successful recovery after Coronary Artery Bypass Grafting surgery under Dr. Nisarga's care at KIMS Hospitals.",
  },
];

/**
 * Fetch embed data from YouTube oEmbed API
 */
async function fetchYouTubeEmbed(
  videoUrl: string
): Promise<{ embedUrl: string; thumbnailUrl: string; title: string } | null> {
  try {
    const urlObj = new URL(videoUrl);
    const videoId = urlObj.searchParams.get("v");
    if (!videoId) return null;

    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(videoUrl)}&format=json`;
    const response = await fetch(oembedUrl, {
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) return null;

    const data = await response.json();
    return {
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      thumbnailUrl:
        data.thumbnail_url || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      title: data.title || "",
    };
  } catch {
    // Fallback: construct embed URL from video ID
    try {
      const urlObj = new URL(videoUrl);
      const videoId = urlObj.searchParams.get("v");
      if (videoId) {
        return {
          embedUrl: `https://www.youtube.com/embed/${videoId}`,
          thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
          title: "",
        };
      }
    } catch {}
    return null;
  }
}

/**
 * Attempt to fetch testimonial data from the KIMS Hospitals website
 */
async function fetchKIMSDoctorProfile(): Promise<{
  title: string;
} | null> {
  try {
    const response = await fetch(
      "https://www.kimshospitals.com/doctor-profile/dr-nisarga/",
      {
        signal: AbortSignal.timeout(8000),
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; DrNisargaBot/1.0; +https://drnisarga.com)",
          Accept: "text/html",
        },
      }
    );

    if (!response.ok) return null;

    const html = await response.text();

    // Extract page title
    const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
    const title = titleMatch
      ? titleMatch[1].replace(/<[^>]*>/g, "").trim()
      : "Dr. Nisarga — KIMS Hospitals";

    return { title };
  } catch {
    return null;
  }
}

export async function GET() {
  const testimonials: Testimonial[] = [];

  // Fetch from YouTube
  for (const source of KNOWN_SOURCES.filter((s) => s.type === "youtube")) {
    const embedData = await fetchYouTubeEmbed(source.url);
    testimonials.push({
      id: source.id,
      platform: "youtube",
      title: source.title,
      description: source.description,
      embedUrl: embedData?.embedUrl ?? source.url,
      sourceUrl: source.url,
      thumbnailUrl: embedData?.thumbnailUrl ?? null,
      date: "2025",
    });
  }

  // Add Instagram sources (displayed as cards with links)
  for (const source of KNOWN_SOURCES.filter((s) => s.type === "instagram")) {
    testimonials.push({
      id: source.id,
      platform: "instagram",
      title: source.title,
      description: source.description,
      embedUrl: null, // Instagram requires access token for oEmbed
      sourceUrl: source.url,
      thumbnailUrl: null,
      date: "2025",
    });
  }

  // Try to fetch KIMS doctor profile
  const kimsData = await fetchKIMSDoctorProfile();
  if (kimsData) {
    testimonials.push({
      id: "kims-website",
      platform: "kims-website",
      title: "Dr. Nisarga at KIMS Hospitals",
      description: kimsData.title,
      embedUrl: "https://www.kimshospitals.com/doctor-profile/dr-nisarga/",
      sourceUrl: "https://www.kimshospitals.com/doctor-profile/dr-nisarga/",
      thumbnailUrl: null,
      date: "2026",
    });
  }

  return NextResponse.json({ testimonials });
}
