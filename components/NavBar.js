import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <>
      <nav className="flex items-center">
        <ul className="flex gap-3 sm:gap-6 overflow-auto">
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/photography">Photography</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/Thomas%20Kilgour%20CV.pdf" download>
            CV
          </NavItem>
        </ul>
      </nav>
    </>
  );
}
