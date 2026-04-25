export default function AdPlaceholder({ label = "Advertisement", compact = false }: { label?: string; compact?: boolean }) {
  return (
    <div className={`rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-center ${compact ? 'p-4' : 'p-6 md:p-8'}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</div>
      <div className="mt-2 text-sm text-slate-600">Reserved ad space</div>
    </div>
  );
}
