import ProjectTile from "./components/ProjectTile";
import EmailButton from "./components/EmailButton";
import { ArrowRight, Github, Linkedin, FileText, LayoutDashboard, Database, Cloud } from "lucide-react"; 

const projects = [
  {
    title: "Class Scheduler",
    description: "A Senior Project tool helping Iowa State University staff optimize class timeslots based on student availability data. Built with Electron for cross-platform desktop usage.",
    imageUrl: "/class_s.png",
    githubUrl: "https://github.com/mless091/Class_Scheduler/tree/main/sdmay24-01-main",
    demoUrl: "https://sdmay24-01.sd.ece.iastate.edu/",
    tags: ["React", "Electron", "TypeScript", "NodeJS", "SQLite"],
  },
  {
    title: "Messaging App",
    description: "A robust real-time chat application featuring secure authentication and instant user-to-user messaging.",
    imageUrl: "/messaging_app_sc.png",
    githubUrl: "https://github.com/mless091/messaging_app",
    demoUrl: "https://messaging-app-michael-less-projects.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    // REMOVED bg-slate-950 from here to prevent covering the background
    <main className="min-h-screen text-slate-200 selection:bg-blue-500/30 relative">
      
<div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.4),rgba(255,255,255,0))] z-0 pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        
        {/* 2. HERO SECTION */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
             {/* Avatar */}
             <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img 
                  src="/profile_pic.png" 
                  alt="Michael Less" 
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-slate-800 shadow-2xl"
                />
             </div>

             {/* Intro Text */}
             <div className="text-center md:text-left space-y-6">
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-900/50 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">Open to Work</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                  Michael Less
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                  Full-Stack Software Engineer focused on building <span className="text-blue-400 font-medium">intelligent, user-first applications</span>. 
                  Passionate about clean architecture, AI integration, and modern cloud infrastructure.
                </p>
                
                {/* Contact / Links Row */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                  <EmailButton />
                  <SocialLink href="https://github.com/mless091" icon={<Github className="w-4 h-4" />} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/michael-less-11b631195/" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
                  
                  <a
                    href="/Michael_Less_Resume.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-md transition border border-slate-700"
                  >
                    <FileText className="w-4 h-4" /> Resume
                  </a>
                </div>
             </div>
          </div>
        </section>

        {/* 3. FEATURED PROJECT (CareerOS) */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="flex items-center gap-2 mb-8">
             <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
             <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Featured Work</h2>
          </div>

          <div className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-colors duration-500">
             {/* Background Glow */}
             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Text Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                   <h3 className="text-3xl font-bold text-white mb-4">CareerOS</h3>
                   <p className="text-slate-400 mb-6 leading-relaxed">
                     A comprehensive AI career platform designed to modernize the job search. 
                     It replaces spreadsheets with a <b>Kanban-style tracker</b> and acts as a copilot 
                     by using <b>Generative AI</b> to tailor resumes and script interview answers 
                     using the STAR method.
                   </p>
                   
                   <div className="flex flex-wrap gap-2 mb-8">
                      {["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Gemini AI"].map(tag => (
                        <span key={tag} className="text-xs font-semibold text-blue-200 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-900/50">
                          {tag}
                        </span>
                      ))}
                   </div>

                   <div className="flex gap-4">
                      <a href="https://careeros-ai.vercel.app/" target="_blank" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-900/20 transition transform hover:-translate-y-0.5">
                        Launch Demo
                      </a>
                      <a href="https://github.com/mless091/career-os" target="_blank" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition">
                        Source Code
                      </a>
                   </div>
                </div>

                {/* Image Content */}
                <div className="relative h-64 lg:h-auto bg-slate-950/50 border-b lg:border-b-0 lg:border-l border-slate-800 order-1 lg:order-2 overflow-hidden">
                   <img 
                     src="/dashboard-preview.png" 
                     alt="CareerOS Dashboard" 
                     className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                   />
                   {/* Overlay gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent lg:bg-gradient-to-l lg:from-slate-900/20"></div>
                </div>
             </div>
          </div>
        </section>

        {/* 4. OTHER PROJECTS */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
           <div className="flex items-center gap-2 mb-8">
             <div className="h-1 w-8 bg-slate-700 rounded-full"></div>
             <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Selected Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <ProjectTile key={idx} {...project} />
            ))}
          </div>
        </section>

        {/* 5. SKILLS SECTION */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 md:p-12">
             <h2 className="text-2xl font-bold text-white mb-8 text-center">Technical Expertise</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Frontend */}
                <SkillGroup 
                  title="Frontend & UI" 
                  icon={<LayoutDashboard className="w-5 h-5 text-blue-400" />}
                  skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Electron", "Framer Motion"]}
                />
                {/* Backend */}
                <SkillGroup 
                  title="Backend & Data" 
                  icon={<Database className="w-5 h-5 text-purple-400" />}
                  skills={["Node.js", "Python", "Java", "PostgreSQL", "Prisma ORM", "SQL", "C"]}
                />
                {/* Tools & Cloud */}
                <SkillGroup 
                  title="Cloud & DevOps" 
                  icon={<Cloud className="w-5 h-5 text-green-400" />}
                  skills={["AWS", "Docker", "Git/GitHub", "CI/CD", "Jest/Mocha", "Agile/Scrum"]}
                />
             </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center pb-12 pt-8 text-slate-600 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Michael Less. Built with Next.js & Tailwind.</p>
          <a 
            href="https://github.com/mless091/portfolio" 
            target="_blank" 
            className="inline-flex items-center gap-1 hover:text-slate-400 transition-colors border-b border-transparent hover:border-slate-500"
          >
            <Github className="w-3 h-3" /> View Portfolio Source
          </a>
        </footer>

      </div>
    </main>
  );
}

// --- Helper Components ---

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-md transition border border-slate-700"
    >
      {icon} {label}
    </a>
  );
}

function SkillGroup({ title, skills, icon }: { title: string, skills: string[], icon: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
         {icon}
         <h3 className="font-semibold text-slate-200">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="text-sm text-slate-400 bg-slate-950 border border-slate-800 px-3 py-1 rounded-md">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}