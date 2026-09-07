// Lightweight loading placeholder so fetching areas never render as blank space.
export default function SkeletonGrid({ count = 6, className = "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", height = "h-48" }) {
  return (
    <div className={className} aria-busy="true" aria-label="Loading content">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`glass rounded-2xl ${height} animate-pulse`} />
      ))}
    </div>
  );
}