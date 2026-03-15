import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
      <h1 className="text-4xl font-black tracking-tight text-slate-950">Page not found</h1>
      <p className="mt-4 text-base leading-8 text-slate-600">
        The page you are looking for does not exist. Try the all calculators page instead.
      </p>
      <Link href="/calculators" className="mt-6 inline-flex rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
        Browse calculators
      </Link>
    </div>
  );
}
