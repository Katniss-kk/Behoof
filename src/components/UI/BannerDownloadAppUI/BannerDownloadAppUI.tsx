import { IBannerDownloadApp } from "@/types/types";

export default function BannerDownloadAppUI({
  data,
}: {
  data: IBannerDownloadApp;
}) {
  return (
    <div className="grid gap-3">
      <h1 className="[font-family:var(--font-family)] font-extrabold text-xl text-[var(--text-title-color)]">
        <span className="text-[var(--text-owner-color)]">{data.highlight}</span>
        {data.text}
      </h1>
      <div className="grid grid-flow-col gap-2">
        <img src={data.imgGoogleImg} alt="Google app" className="min-h-12"/>
        <img src={data.imgAppleImg} alt="Apple app" className="min-h-12"/>
      </div>
      <img src={data.phoneLogoImg} alt="Logo" />
    </div>
  );
}
