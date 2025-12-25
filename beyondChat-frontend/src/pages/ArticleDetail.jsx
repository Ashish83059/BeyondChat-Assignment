import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, ExternalLink, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";
import Header from "@/components/Header.jsx";
import VersionToggle from "@/components/VersionToggle.jsx";
import LoadingSpinner from "@/components/LoadingSpinner.jsx";
import { fetchArticleById, fetchUpdatedArticle } from "@/data/articles.js";

const ArticleDetail = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [article, setArticle] = useState(null);
  const [updatedArticle, setUpdatedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const showUpdated = searchParams.get("version") === "updated";

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const [originalData, updatedData] = await Promise.all([
          fetchArticleById(id),
          fetchUpdatedArticle(id)
        ]);
        setArticle(originalData);
        setUpdatedArticle(updatedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  const handleVersionToggle = (showUpdatedVersion) => {
    if (showUpdatedVersion) {
      setSearchParams({ version: "updated" });
    } else {
      setSearchParams({});
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen gradient-warm">
        <Header />
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen gradient-warm">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Article Not Found</h1>
          <p className="mt-4 text-muted-foreground">{error || "The requested article could not be found."}</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-primary hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const currentArticle = showUpdated && updatedArticle ? updatedArticle : article;
  const hasUpdatedVersion = !!updatedArticle;

  return (
    <div className="min-h-screen gradient-warm">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Articles
        </Link>

        {/* Version Toggle */}
        {hasUpdatedVersion && (
          <div className="mb-6 flex justify-center">
            <VersionToggle
              showUpdated={showUpdated}
              onToggle={handleVersionToggle}
              hasUpdatedVersion={hasUpdatedVersion}
            />
          </div>
        )}

        {/* Article Content */}
        <article className="mx-auto max-w-3xl animate-fade-in">
          {/* Hero Image */}
          <div className="relative aspect-[2/1] overflow-hidden rounded-2xl mb-8">
            <img
              src={currentArticle.imageUrl}
              alt={currentArticle.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute left-6 top-6">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                {currentArticle.category}
              </Badge>
            </div>
            
            {/* AI Enhanced Badge */}
            {(showUpdated && updatedArticle) && (
              <div className="absolute right-6 top-6">
                <Badge className="bg-accent text-accent-foreground">
                  <Sparkles className="mr-1 h-3 w-3" />
                  AI Enhanced Version
                </Badge>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-tight">
            {currentArticle.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {currentArticle.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(currentArticle.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {currentArticle.readTime} min read
            </span>
          </div>

          {/* Excerpt */}
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {currentArticle.excerpt}
          </p>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mt-8 text-foreground
              prose-headings:font-display prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-ul:my-4 prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: currentArticle.content }}
          />

          {/* References for Updated Articles */}
          {showUpdated && updatedArticle?.references && (
            <div className="mt-12 rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-accent" />
                Reference Sources
              </h3>
              <ul className="mt-4 space-y-3">
                {updatedArticle.references.map((ref, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        {ref.title}
                      </a>
                      <p className="text-sm text-muted-foreground">{ref.source}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Version Switch CTA */}
          {hasUpdatedVersion && !showUpdated && (
            <div className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-6 text-center">
              <Sparkles className="mx-auto h-8 w-8 text-accent" />
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                AI-Enhanced Version Available
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                This article has been enhanced with additional insights and references from top-ranking sources.
              </p>
              <button
                onClick={() => handleVersionToggle(true)}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <Sparkles className="h-4 w-4" />
                View Enhanced Version
              </button>
            </div>
          )}
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 BeyondChats. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Phase 3 Assignment - ReactJS Frontend
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetail;
