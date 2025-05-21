import EmailButton from "./EmailButton";
import React from "react";

export default function Sidebar() {
    return (
        <div className="flex flex-col items-center space-y-6 p-4 -mt-4">
            <img
                src="/profile_pic.png"
                alt="Profile"
                className="rounded-md w-60 h-auto border border-zinc-700 object-cover"
            />
            <div className="text-center">
                <p className="text-lg font-semibold">Michael Less</p>
                <p className="text-sm text-zinc-400">Software Engineer</p>
            </div>



            <div className="flex space-x-4 justify-center">
                <EmailButton />

                <a
                    href="https://github.com/mless091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-700 rounded-md text-white hover:bg-zinc-600 transition"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/michael-less-11b631195/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-700 rounded-md text-white hover:bg-zinc-600 transition"
                >
                    LinkedIn
                </a>
                <a
                    href="/Michael_Less_Resume.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-700 rounded-md text-white hover:bg-zinc-600 transition"
                >
                    Resume
                </a>
            </div>



            <div className="bg-zinc-800 p-3 rounded-md text-sm text-center text-zinc-300 max-w-sm mx-auto">
                <h2 className="text-lg font-semibold mb-1 text-white">About Me</h2>
                <p className="leading-relaxed">
                    I’m <span className="font-semibold text-white">Michael Less</span>, a passionate software engineer focused on building clean, user-first applications. Skilled in full-stack development and eager to grow in AI and cloud technologies, I aim to join innovative teams where I can contribute and learn.
                </p>
            </div>


            <div className="bg-zinc-800 p-3 rounded-md text-xs text-center text-zinc-400 max-w-sm mx-auto">
                <h3 className="text-lg font-semibold text-white mb-1">Skills and Technology</h3>
                <p className="flex flex-wrap justify-center gap-2">
                    <span className="bg-zinc-700 px-2 py-1 rounded">Java</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Python</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">C</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">SQL</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">GitHub/GitLab</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">TypeScript</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">React</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Node.js</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Electron</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">AWS</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Tailwind CSS</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Next.js</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Jest</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Mocha</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Agile</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Scrum</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">CI/CD</span>
                    <span className="bg-zinc-700 px-2 py-1 rounded">Android Studio</span>

                </p>
            </div>
            <div className="bg-zinc-800 p-3 rounded-md text-sm text-center text-zinc-400 max-w-sm mx-auto">
                <h3 className="font-semibold text-white mb-1">Currently Exploring</h3>
                <p>AI & Machine Learning, Cloud Infrastructure, Docker & Kubernetes</p>
            </div>

           
        </div>
    );
}
