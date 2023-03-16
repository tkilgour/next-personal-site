import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ href, download, children }) {
  const router = useRouter();
  const active = router.pathname === href;
  let link;

  if (!active && !download) {
    link = (
      <Link
        href={href}
        className="pb-1 focus:outline-none hover:border-b-2 focus:border-b-2 hover-color-secondary"
      >
        {children}
      </Link>
    );
  } else if (active) {
    link = (
      <div>
        <span className="border-dashed pb-1 border-b-2 border-color-secondary">
          {children}
        </span>
      </div>
    );
  } else if (download) {
    link = (
      <a
        href={href}
        download
        className="pb-1 focus:outline-none hover:border-b-2 focus:border-b-2 hover-color-secondary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1 mb-1 inline"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <>
      <li className="p-1">{link}</li>
    </>
  );
}
