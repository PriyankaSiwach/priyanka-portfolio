export default function Footer() {
  return (
    <footer className="border-t border-periwinkle-200/40 py-8">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-center sm:justify-start gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ps.png"
          alt=""
          className="w-8 h-8 rounded-lg object-cover border border-periwinkle-200/40"
        />
        <span className="font-mono text-xs text-ink-300">
          © {new Date().getFullYear()} Priyanka Siwach
        </span>
      </div>
    </footer>
  );
}
