import Image from "next/image";

export default function ProjectCard({ id, websiteUrl, githubUrl, name, openGraphImageUrl, description, tags }) {
  return (
    <div key={id} className="px-4 py-6 border rounded-lg shadow-md">
      <a href={websiteUrl || githubUrl}>
        <Image
          alt=""
          width="800"
          height="600"
          className="mb-4"
          src={openGraphImageUrl}
        />
      </a>
      <div className="pb-4 border-b">
        <div className="flex gap-3 items-center">
          <h2 className="text-xl">
            <a href={websiteUrl || githubUrl}>{name}</a>
          </h2>
          {websiteUrl && (
            <a href={websiteUrl} aria-label="Website">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link"
              >
                <title>Website for {name}</title>
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </a>
          )}
          <a href={githubUrl} aria-label="Github">
            <svg
              className="octicon octicon-mark-github v-align-middle"
              height="20"
              viewBox="0 0 16 16"
              fill="currentColor"
              version="1.1"
              width="20"
              aria-hidden="true"
            >
              <title>Github repository for {name}</title>
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="pt-4">
        {!!tags.length && (
          <ul className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <li
                key={tag}
                className="text-sm px-2 py-0.5 rounded-lg bg-color-secondary"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
