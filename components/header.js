import NavBar from "./NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false
})

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className="py-4 sm:py-8 mb-4 relative">
        <h1 className="mb-6">
          <div className="text-4xl block sm:inline">
            {router.pathname === "/" ? (
              <span>Thomas Kilgour</span>
            ) : (
              <Link href="/">Thomas Kilgour</Link>
            )}
          </div>
          <span className="text-lg font-mono pl-2 text-color-secondary">
            <span className="hidden sm:inline">–</span> Web Developer
          </span>
        </h1>
        <NavBar />
        <ThemeToggle />
      </header>
    </>
  );
}
