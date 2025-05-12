
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import LeadGenerationPopup from '@/components/LeadGenerationPopup';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Article as ArticleType } from '@/types';
import { getArticleById, getRecommendedArticles } from '@/utils/articleUtils';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [recommendedArticles, setRecommendedArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // In a real app, we would fetch the article from an API
      const fetchedArticle = getArticleById(id);
      
      if (fetchedArticle) {
        setArticle(fetchedArticle);
        setRecommendedArticles(getRecommendedArticles(id));
      }
    }
    
    setLoading(false);
    
    // Track page view
    console.log('Article page viewed:', id);
  }, [id]);

  const formattedDate = article ? new Date(article.publishDate).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {loading ? (
          <div className="container mx-auto px-4 py-12 flex justify-center">
            <p>Loading article...</p>
          </div>
        ) : article ? (
          <>
            {/* Article Header */}
            <div className="bg-white border-b">
              <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <span>{article.sourceName}</span>
                    <span>•</span>
                    <span>{formattedDate}</span>
                  </div>
                  
                  <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    {article.title}
                  </h1>
                  
                  <p className="text-lg text-muted-foreground mb-4">
                    {article.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.categories.map(category => (
                      <Badge key={category} variant="secondary">
                        {category.replace('-', ' ')}
                      </Badge>
                    ))}
                    {article.regions.map(region => (
                      <Badge key={region} variant="outline">
                        {region}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                {/* Featured Image */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-auto aspect-[16/9] object-cover"
                  />
                </div>
                
                {/* Article Body */}
                <div 
                  className="article-content mb-8"
                  dangerouslySetInnerHTML={{ __html: article.content }} 
                />
                
                {/* Source Attribution */}
                <div className="border-t pt-4 mb-12">
                  <p className="text-sm text-muted-foreground">
                    Source: {' '}
                    <a 
                      href={article.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-realestate-600 hover:underline"
                    >
                      {article.sourceName}
                    </a>
                  </p>
                </div>
                
                {/* Newsletter Signup */}
                <div className="mb-12">
                  <NewsletterSignup />
                </div>
                
                {/* Recommended Articles */}
                {recommendedArticles.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-serif font-bold mb-6">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {recommendedArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="container mx-auto px-4 py-12 flex justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
              <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </div>
        )}
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
      <LeadGenerationPopup triggerTime={45} />
    </div>
  );
};

export default Article;
