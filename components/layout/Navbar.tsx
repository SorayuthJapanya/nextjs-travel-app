import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../ui/nav-link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="hilink-logo"
          width={74}
          height={29}
        />
      </Link>

      <ul className="hidden h-full gap-12 md:flex">
        {NAV_LINKS.map((link) => (
          <NavLink slug={link.href} key={link.key} label={link.label} />
        ))}
      </ul>

      <div className="hidden md:flex items-center justify-center">
        <Button className="rounded-full">
          <Image src="/user.svg" alt="user" width={16} height={16} />
          <span className="ml-2">Login</span>
        </Button>
      </div>

      <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 duration-200 md:hidden cursor-pointer">
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="md:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
