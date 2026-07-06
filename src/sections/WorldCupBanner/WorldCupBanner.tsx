import DesktopBanner from "./components/DesktopBanner";
import MobileBanner from "./components/MobileBanner";

export default function WorldCupBanner() {
  return (
    <div className="box-border caret-transparent gap-x-0 flex min-h-[auto] md:max-h-30 min-w-[auto] gap-y-0 w-full text-white bg-blue-950">
      <DesktopBanner />
      <MobileBanner />
    </div>
  );
}
