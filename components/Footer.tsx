export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span style={{ color: "rgba(51,65,85,1)", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Wakung&apos;uma Nyambe III. All rights
          reserved.
        </span>
        <span
          style={{
            color: "rgba(51,65,85,1)",
            fontSize: "0.75rem",
            fontFamily: "monospace",
          }}
        >
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
