
import { Link } from 'react-router-dom';
import { Article } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  const formattedDate = new Date(article.publishDate).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 z-10" />
      
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-full object-cover aspect-[16/9] md:aspect-[21/9]"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-20 text-white">
        <div className="flex items-center space-x-2 text-sm opacity-90 mb-2">
          <span>{article.sourceName}</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>
        
        <h2 className="font-serif text-2xl md:text-4xl font-bold max-w-2xl mb-3">
          {article.title}
        </h2>
        
        <p className="text-sm md:text-base opacity-90 max-w-xl mb-4 line-clamp-2 md:line-clamp-3">
          {article.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.categories.slice(0, 3).map(category => (
            <Badge key={category} className="bg-white/20 hover:bg-white/30 text-white">
              {category.replace('-', ' ')}
            </Badge>
          ))}
        </div>
        
        <Button asChild size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
          <Link to={`/article/${article.id}`}>Read Article</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedArticle;
