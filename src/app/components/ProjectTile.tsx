// app/components/ProjectTile.tsx
type ProjectTileProps = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  tags?: string[]; // Optional tags array
};

export default function ProjectTile({
  title,
  description,
  imageUrl,
  githubUrl,
  tags = [],
}: ProjectTileProps) {
  return (
    <div className="bg-zinc-700 p-4 rounded-lg shadow-md hover:bg-zinc-600 transition">
      <img src={imageUrl} alt={`${title} screenshot`} className="rounded mb-3" />
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-zinc-300 mb-2">{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-zinc-600 text-xs text-white px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={githubUrl}
        className="text-blue-400 hover:underline text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub →
      </a>
    </div>
  );
}
