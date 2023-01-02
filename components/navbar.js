import { Icon } from "../utils/icons";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-[70px] bg-white border-b z-20 shadow">
      <div className="relative max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <a
          href="components/navbar#"
          className="font-extrabold text-slate-800 text-2xl tracking-tight leading-6 inline-block select-none py-4"
        >
          Commercify
        </a>
        <button className="inline-flex items-center gap-2 text-white bg-blue-700 font-semibold text-md leading-6 p-2 border rounded-md relative">
          {Icon("bag")} My bag
          <span className="absolute -top-2 -right-2 w-[22px] h-[22px] rounded-[22px] shadow-2xl bg-sky-900 text-white text-xs leading-[22px] text-center z-10">
            0
          </span>
        </button>
      </div>
    </header>
  );
}
