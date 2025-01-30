"use client";

export function Header() {
  return (
    <nav className="shadow-transparent">
      <span className="self-center font-sans whitespace-nowrap  text-texto font-bold  dark:text-white">
        <img
          src="public/logo.png"
          alt="logo"
          className="w-32 translate-x-10 translate-y-2 object-contain bg-transparent"
        />
      </span>
    </nav>
  );
}
