// Style reminder: the mark is a route-marker stamp; keep it bold, compact, and high-contrast on field-green surfaces.

type BrandMarkProps = {
  size?: "sm" | "md";
};

export default function BrandMark({ size = "md" }: BrandMarkProps) {
  return (
    <svg className={`cc-brand-mark cc-brand-mark-${size}`} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="#F5B60D" strokeWidth="2.5" />
      <path d="M9.5 16.5l4.1 4.1L22.5 12" stroke="#86D9AE" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 7.5l3-2M25.5 7.5l-3-2" stroke="#F5B60D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
