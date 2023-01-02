export default function Footer() {
  return (
    <footer className="block relative max-w-7xl mx-auto py-7 px-4">
      <p className="text-slate-500 text-sm mb-6">
        &copy; {new Date().getFullYear()} Commercify - All rights reserved
      </p>
    </footer>
  );
}
