import navlinks from "@/data/navlinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => (
        <a className="mr-5">
          <Link href={nav.link} key={nav.title}>
            {nav.title}
          </Link>
        </a>
      ))}
    </nav>
  );
};

export default Nav;
