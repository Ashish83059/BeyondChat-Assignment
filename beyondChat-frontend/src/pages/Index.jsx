import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Sparkles } from "lucide-react";
import Header from "@/components/Header.jsx";
import ArticleGrid from "@/components/ArticleGrid.jsx";
import LoadingSpinner from "@/components/LoadingSpinner.jsx";
import { fetchArticles, fetchAllUpdatedArticles } from "@/data/articles.js";

const Index = () => {
  const [articles, setArticles] = useState([]);
  const [updatedArticles, setUpdatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const [originalData, updatedData] = await Promise.all([
          fetchArticles(),
          fetchAllUpdatedArticles()
        ]);
        setArticles(originalData);
        setUpdatedArticles(updatedData);
      } catch (error) {
        console.error("Error loading articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <div className="min-h-screen gradient-warm">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center animate-fade-in">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            BeyondChats Articles
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our collection of articles on AI, customer support, and conversational technology. 
            View both original content and AI-enhanced versions.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-soft">
            <p className="font-display text-3xl font-bold text-primary">{articles.length}</p>
            <p className="mt-1 text-sm text-muted-foreground">Original Articles</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-soft">
            <p className="font-display text-3xl font-bold text-accent">{updatedArticles.length}</p>
            <p className="mt-1 text-sm text-muted-foreground">AI-Enhanced Versions</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-soft">
            <p className="font-display text-3xl font-bold text-foreground">
              {articles.reduce((acc, a) => acc + a.readTime, 0)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Minutes of Reading</p>
          </div>
        </section>

        {/* Tabs */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Original Articles
              </TabsTrigger>
              <TabsTrigger value="updated" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                AI Enhanced
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <ArticleGrid articles={articles} />
            </TabsContent>

            <TabsContent value="updated">
              {updatedArticles.length > 0 ? (
                <ArticleGrid articles={updatedArticles} isUpdated />
              ) : (
                <div className="py-12 text-center">
                  <Sparkles className="mx-auto h-12 w-12 text-muted-foreground" />
                  <p className="mt-4 text-muted-foreground">
                    No AI-enhanced articles available yet.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
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

export default Index;
