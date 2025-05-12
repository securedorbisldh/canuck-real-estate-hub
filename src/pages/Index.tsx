
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FeaturedArticle from '@/components/FeaturedArticle';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import LeadGenerationPopup from '@/components/LeadGenerationPopup';
import SearchFilters from '@/components/SearchFilters';
import { Article, Category, Region } from '@/types';
import { MOCK_ARTICLES, filterArticles, getFeaturedArticle } from '@/utils/articleUtils';

const Index = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | undefined>();

  useEffect(() => {
    // In a real app, we would fetch articles from an API
    const allArticles = MOCK_ARTICLES;
    const featured = getFeaturedArticle();
    
    setArticles(allArticles);
    setFilteredArticles(allArticles.filter(a => a.id !== featured?.id));
    setFeaturedArticle(featured);
  }, []);

  const handleFilterChange = (filters: {
    category?: Category;
    region?: Region;
    sort: string;
  }) => {
    const filtered = filterArticles(articles, {
      ...filters,
      approved: true,
    });
    
    setFilteredArticles(filtered.filter(a => a.id !== featuredArticle?.id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Featured Article */}
        <section className="mb-8">
          {featuredArticle && <FeaturedArticle article={featuredArticle} />}
        </section>
        
        <div className="container px-4 mx-auto">
          {/* Search Filters */}
          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4">Find News & Insights</h2>
            <SearchFilters onFilterChange={handleFilterChange} />
          </section>
          
          {/* Latest Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.slice(0, 6).map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
          
          {/* Newsletter Signup */}
          <section className="mb-12">
            <NewsletterSignup />
          </section>
          
          {/* More Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">More Real Estate News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredArticles.slice(6, 10).map(article => (
                <ArticleCard key={article.id} article={article} compact />
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">RealNewsCanada</h3>
              <p className="text-sm text-gray-600">
                Your trusted source for Canadian real estate news, market trends, and insights.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>Latest News</li>
                <li>Market Reports</li>
                <li>Subscribe</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <address className="text-sm text-gray-600 not-italic">
                123 Real Estate Avenue<br />
                Toronto, ON M5V 2K5<br />
                info@realnewscanada.com
              </address>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
            <p>© 2025 RealNewsCanada. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Lead Generation Popup */}
      <LeadGenerationPopup triggerTime={20} />
    </div>
  );
};

export default Index;
