import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";

const ArticleCard = ({ article, isUpdated = false }) => {
  const linkPath = isUpdated 
    ? `/article/${article.originalId}?version=updated`
    : `/article/${article.id}`;

  return (
    <article className="article-card group relative overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      {/* Image */}
      <div className="relative aspect-[2/1] overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute left-4 top-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground backdrop-blur-sm">
            {article.category}
          </Badge>
        </div>
        
        {/* Updated Badge */}
        {(isUpdated || article.isUpdated) && (
          <div className="absolute right-4 top-4">
            <Badge className="bg-accent text-accent-foreground">
              <Sparkles className="mr-1 h-3 w-3" />
              AI Enhanced
            </Badge>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h2 className="font-display text-xl font-semibold leading-tight text-card-foreground transition-colors group-hover:text-primary">
          {article.title}
        </h2>
        
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
          {article.excerpt}
        </p>
        
        {/* Meta */}
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime} min read
          </span>
        </div>
        
        {/* Read More Link */}
        <Link
          to={linkPath}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        
        {/* Has Updated Version Indicator */}
        {article.hasUpdatedVersion && !isUpdated && (
          <div className="mt-3 pt-3 border-t border-border">
            <Link
              to={`/article/${article.id}?version=updated`}
              className="inline-flex items-center gap-2 text-xs font-medium text-accent transition-colors hover:text-primary"
            >
              <Sparkles className="h-3 w-3" />
              View AI-Enhanced Version
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default ArticleCard;
