export default function ButtonFilterBrands({
  totalBrands,
}: {
  totalBrands: string[];
}) {

  return (
    <>
      {totalBrands.map((brand) => (
        <button
          key={brand}
          className="bg-[var(--bg-filter-button)] border border-[var(--bg-filter-button)] rounded-2xl [font-family:var(--font-family)] text-[var(--text-title-color)] text-sm font-medium px-3.5 py-2.5"
        >
          {brand}
        </button>
      ))}
    </>
  );
}
