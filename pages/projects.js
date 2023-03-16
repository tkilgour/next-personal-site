import Head from "next/head";

export default function Projects({ projects }) {
  console.log(projects[0]);
  return (
    <div>
      <Head>
        <title>Projects – Thomas Kilgour</title>
      </Head>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="px-4 py-6 border rounded-lg shadow-md"
          >
            <div className="pb-4 border-b">
              <h2 className="text-xl mb-2">
                <a href={project.websiteUrl || project.githubUrl}>
                  {project.name}
                </a>
              </h2>

              <div className="flex items-center">
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    className="mr-2"
                    aria-label="Website"
                  >
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
                      <title>Website for {project.name}</title>
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                )}
                <a href={project.githubUrl} aria-label="Github">
                  <svg
                    className="octicon octicon-mark-github v-align-middle"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    version="1.1"
                    width="20"
                    aria-hidden="true"
                  >
                    <title>Github repository for {project.name}</title>
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="pt-4">
              {!!project.tags.length && (
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-sm px-2 py-0.5 rounded-lg bg-color-secondary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              {project.description && <p>{project.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // setup github graphql api call
  const query = `
  query {
    viewer {
      pinnedItems(first: 10) {
        edges {
          node {
            ... on Repository {
              id
              name
              githubUrl: url
              websiteUrl: homepageUrl
              description
              repositoryTopics(first: 10) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  // fetch data from github api
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_PERSONAL_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  // parse response as json
  const { data } = await res.json();
  const projects = data.viewer.pinnedItems.edges.map((edge) => {
    return {
      tags: edge.node.repositoryTopics.edges.map(
        (edge) => edge.node.topic.name
      ),
      ...edge.node,
    };
  });
  return {
    props: { projects },
  };
};
