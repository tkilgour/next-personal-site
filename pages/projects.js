import Head from "next/head";
import ProjectCard from "../components/ProjectCard";

export default function Projects({ projects }) {
  return (
    <div>
      <Head>
        <title>Projects – Thomas Kilgour</title>
      </Head>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
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
              openGraphImageUrl
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
