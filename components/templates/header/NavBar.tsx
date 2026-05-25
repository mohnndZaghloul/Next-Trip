import NavLink from "@/components/ui/NavLink";
import HeaderFilter from "./filter/HeaderFilter";

export default function NavBar() {
  return (
    <header className="bg-linear-to-br from-chart-2 to-primary top-0 w-full py-4 border shadow-primary/50 shadow-2xl">
      <nav className="container flex justify-between items-center mx-auto">
        <h1 className="text-2xl">Logo</h1>
        <ul className="md:flex hidden justify-center items-center gap-4 capitalize">
          <li>
            <NavLink href="/">home</NavLink>
          </li>
          <li>
            <NavLink href="/experiences">experiences</NavLink>
          </li>
          <li>
            <NavLink href="/services">services</NavLink>
          </li>
        </ul>
        <div className="capitalize space-x-4">
          <NavLink href="/sign-in">sign in</NavLink>
          <NavLink href="/sign-up">sign up</NavLink>
        </div>
      </nav>
      <HeaderFilter />
    </header>
  );
}
