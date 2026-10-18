export default function MiniChart({ values, positive }: { values: number[]; positive: boolean }) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => `${(index / (values.length - 1)) * 100},${25 - ((value - min) / range) * 21}`).join(' ');
  const stroke = positive ? '#10b981' : '#ef4444';
  return <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="h-full w-full overflow-visible" role="img" aria-label={`${positive ? 'Positive' : 'Negative'} recent trend`}><polyline points={points} fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" /></svg>;
}
