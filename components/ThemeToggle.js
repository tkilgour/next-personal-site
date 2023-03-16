import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  return (
    <>
      <button
        className="absolute flex justify-center items-end w-12 h-8 top-0 right-0 mt-6 text-color-primary overflow-hidden focus-visible:ring focus:outline-none"
        aria-label={`Switch to ${inactiveTheme} mode`}
        onClick={() => setActiveTheme(inactiveTheme)}
      >
        <svg
          key={activeTheme === 'light' ? 'sun' : 'moon'}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute bottom-0"
        >
          {activeTheme === 'light' ? (
            <>
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </>
          ) : (
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          )}
        </svg>
      </button>
    </>
  );
}