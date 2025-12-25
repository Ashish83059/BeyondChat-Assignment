import { Sparkles, FileText } from "lucide-react";

const VersionToggle = ({ showUpdated, onToggle, hasUpdatedVersion }) => {
  if (!hasUpdatedVersion) return null;

  return (
    <div className="inline-flex items-center rounded-lg border border-border bg-card p-1 shadow-soft">
      <button
        onClick={() => onToggle(false)}
        className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
          !showUpdated
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <FileText className="h-4 w-4" />
        Original
      </button>
      <button
        onClick={() => onToggle(true)}
        className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
          showUpdated
            ? "bg-accent text-accent-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Sparkles className="h-4 w-4" />
        AI Enhanced
      </button>
    </div>
  );
};

export default VersionToggle;
