import ArticleCard from "./ArticleCard.jsx";

const ArticleGrid = ({ articles, title, isUpdated = false }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">No articles found.</p>
      </div>
    );
  }

  return (
    <section className="py-8">
      {title && (
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
          {title}
        </h2>
      )}
      <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            isUpdated={isUpdated}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;
