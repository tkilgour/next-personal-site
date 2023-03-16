import NavBar from "./NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

export default function Header() {
  return (
    <>
      <header className="py-4 sm:py-8 mb-4 relative">
        <HeaderLink>
          <div className="flex items-center sm:items-baseline mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 784 466"
              className="w-16 sm:w-24 mr-6 text-color-secondary"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M236 466h156V74H236Z"
              />
              <path fill="currentColor" fillRule="evenodd" d="M0 466h156V74H0Z" />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M471 466h216L471 250Z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m551 233 233 233V0Z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M471 0v216L687 0Z"
              />
            </svg>
            <div className="flex flex-col sm:flex-row items-baseline">
              <p className="text-3xl sm:text-5xl block sm:inline">
                Thomas Kilgour
              </p>
              <div></div>
              <span className="text-lg font-mono sm:pl-2 text-color-secondary">
                <span className="hidden sm:inline">–</span> Web Developer
              </span>
            </div>
          </div>
        </HeaderLink>
        <NavBar />
        <ThemeToggle />
      </header>
    </>
  );
}

function HeaderLink({ children }) {
  const router = useRouter();
  return router.pathname === "/" ? (
    children
  ) : (
    <Link href="/">{children}</Link>
  );
}
