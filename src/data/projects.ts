export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "traveller-api",
    title: "Traveller API",
    description:
      "Scalable REST API with jwt authentication,rbac,rate limiting,without any type using typescript  , custom loggin and error handling , also made it as a container using docker, custom loggin and error handling , also made it as a container using docker",
    tech: ["Node.js", "Express", "jwt", "typescript", "mongodb", "Docker"],
    github: "https://github.com/amalthomas26/traveller-api",
  },
  {
    id: "primepicks",
    title: "PrimePicks",
    description: "e-commerce frontend build with react + vite",
    tech: ["React", "vite", "aws elastic beanstalk"],
    github: "https://github.com/amalthomas26/ecommerce-primePicks-react",
  },
  {
    id: "ums-graphql",
    title: "UMS GraphQL API",
    description:
      "user management system with graphql api using apollo server,jwt auth and rbac , also basic pagination",
    tech: ["GraphQL", "Apollo Server", "typescript", "mongodb", "jwt"],
    github:"https://github.com/amalthomas26/ums-api"
  },
];

//designed the data model for growth, not the current ui