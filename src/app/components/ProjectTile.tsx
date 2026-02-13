import React from "react";

type ProjectTileProps = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  tags?: string[];
};

export default function ProjectTile({
  title,
  description,
  imageUrl,
  githubUrl,
  demoUrl,
  tags = [],
}: ProjectTileProps) {
  return (
    <div className="group relative flex flex-col h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
      {/* Image Container with Zoom Effect */}
      <div className="w-full h-48 overflow-hidden relative border-b border-slate-800">
         <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
         <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
             <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{title}</h3>
        </div>
        
        <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-grow">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-800 mt-auto">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors shadow-lg shadow-blue-900/20"
            >
              Live Demo
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}