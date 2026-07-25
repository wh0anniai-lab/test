export function Footer() {
  return (
    <footer className="border-t border-hairline bg-mist py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-steel">
        <p>© {new Date().getFullYear()} 김동영. All rights reserved.</p>
        <p>Designed &amp; built with Next.js</p>
      </div>
    </footer>
  );
}
