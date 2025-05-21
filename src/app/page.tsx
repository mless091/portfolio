import Sidebar from "./components/Sidebar";
import ProjectTile from "./components/ProjectTile";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      {/* Static Sidebar */}
      <div className="w-1/3 bg-zinc-900 p-6 overflow-y-auto">
        <Sidebar />
      </div>

      {/* Scrollable Right Section */}
      <div className="w-2/3 bg-zinc-800 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectTile
            title="Project 1"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />

          <ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
<ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
          <ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
          <ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
          <ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
          <ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
          <ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
          <ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
          <ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
          <ProjectTile
            title="Project 2"
            description="Description"
            imageUrl="/project2.png"
            githubUrl="https://github.com/mless091/chatbot-ai"
            tags={["React", "TypeScript", "OpenAI", "ChatGPT"]}
          />
          
        </div>
      </div>
    </main>
  );
}
