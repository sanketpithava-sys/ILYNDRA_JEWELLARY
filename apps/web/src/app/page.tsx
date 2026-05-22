import { LuxuryHome } from "@/components/luxury/luxury-home";

const heroVideoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
const heroImageSrc = process.env.NEXT_PUBLIC_HERO_IMAGE_URL ?? "/hero-image.jpeg";

export default function Page() {
  return <LuxuryHome videoSrc={heroVideoSrc} imageSrc={heroImageSrc} />;
}
