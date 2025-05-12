
import { Link } from 'react-router-dom';
import { Article } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

const ArticleCard = ({ article, compact = false }: ArticleCardProps) => {
  const formattedDate = new Date(article.publishDate).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Card className="h-full transition-all hover:shadow-md overflow-hidden">
      <Link to={`/article/${article.id}`} className="flex flex-col h-full">
        {!compact && (
          <div className="aspect-video overflow-hidden bg-muted">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        )}
        <CardContent className={`flex-1 ${compact ? 'pt-4' : 'pt-6'}`}>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
            <span>{article.sourceName}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
          <h3 className={`font-serif font-medium ${compact ? 'text-base mb-1' : 'text-xl mb-2'}`}>
            {article.title}
          </h3>
          {!compact && (
            <p className="text-muted-foreground text-sm truncate-2 mb-3">
              {article.summary}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-auto">
            {article.categories.slice(0, compact ? 1 : 2).map(category => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category.replace('-', ' ')}
              </Badge>
            ))}
            {article.regions.slice(0, 1).map(region => (
              <Badge key={region} variant="outline" className="text-xs">
                {region}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ArticleCard;
