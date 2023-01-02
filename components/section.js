import { Icon } from "../utils/icons";

export const Section = ({ children, className, title, iconName }) => (
  <section className={`relative max-w-7xl mx-auto px-6 py-5 ${className}`}>
    <h1 className="font-semibold uppercase tracking-widest text-slate-600 text-xs leading-8 pb-2 mb-2 px-2 border-b border-slate-400 flex items-center justify-start gap-2">
      {Icon(iconName, 14)}
      {title}
    </h1>
    <div className="mt-4 pb-2 px-2">{children}</div>
  </section>
);
