import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <>
      <nav className="flex items-center">
        <ul className="flex">
          <NavItem href="/about">About</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/Thomas%20Kilgour%20resume.pdf" download>
            Resume
          </NavItem>
        </ul>
      </nav>
    </>
  );
}
