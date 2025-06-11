import Sidebar from "./components/Sidebar";
import ProjectTile from "./components/ProjectTile";

const projects = [
  {
    title: "Messaging App",
    description: "A full-stack real-time messaging app with authentication and user-to-user messaging.",
    imageUrl: "/messaging_app_sc.png",
    githubUrl: "https://github.com/mless091/messaging_app",
    demoUrl: "https://messaging-app-michael-less-projects.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
  },
  {
    title: "Class Scheduler - Senior Project",
    description: "A class scheduling tool to help staff of the ECpE Department at Iowa State to quickly find timeslots where the most amount of targeted students are expected to be available",
    imageUrl: "/class_s.png",
    githubUrl: "https://github.com/mless091/Class_Scheduler/tree/main/sdmay24-01-main",
    demoUrl: "https://sdmay24-01.sd.ece.iastate.edu/",
    tags: ["React", "Electron", "TypeScript", "NodeJS", "SQLite"],
  },
  {
    title: "WIP - Movie Recommender",
    description: "A site with the goal of being able to search through a library of movies, get recommendations, etc. and once finding one, be linked directly to the streaming service that currently has it.",
    imageUrl: "/movie_recommender_sc.png",
    githubUrl: "https://github.com/mless091/movie-recommender",
    tags: ["React", "Electron", "TypeScript", "NodeJS", "SQLite"],
  },
];

export default function Home() {
  // Split projects into two arrays by index parity (0-based)
  const leftColumn = projects.filter((_, i) => i % 2 === 0);
  const rightColumn = projects.filter((_, i) => i % 2 === 1);

  return (
    <main className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/3 bg-zinc-900 p-6 overflow-y-auto">
        <Sidebar />
      </div>

      {/* Two-column flex container */}
      <div className="w-2/3 bg-zinc-800 p-6 overflow-y-auto flex gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-1 w-1/2">
          {leftColumn.map((project, idx) => (
            <ProjectTile key={idx} {...project} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-1 w-1/2">
          {rightColumn.map((project, idx) => (
            <ProjectTile key={idx} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
