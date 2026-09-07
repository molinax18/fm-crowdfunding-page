import { LINKS } from "../constants/links";

export default function NavbarMobile() {
  return (
    <nav className="fixed -z-10 inset-0 bg-black/50">
      <ul className="relative top-18 flex flex-col w-[90%] mx-auto rounded-lg bg-white text-black font-medium">
        {LINKS.map(({ href, value }) => (
          <li
            key={value}
            className="p-4 border-b border-gray-500/30 last:border-b-0"
          >
            <a href={href}>{value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
