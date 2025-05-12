
export type Category = 
  | 'market-trends' 
  | 'investment' 
  | 'residential' 
  | 'commercial' 
  | 'property-development'
  | 'mortgage'
  | 'luxury'
  | 'policy'
  | 'technology';

export type Region = 
  | 'national' 
  | 'toronto' 
  | 'vancouver' 
  | 'montreal' 
  | 'calgary' 
  | 'ottawa'
  | 'edmonton'
  | 'halifax'
  | 'winnipeg';

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
  publishDate: string;
  categories: Category[];
  regions: Region[];
  featured?: boolean;
  approved: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  interests: Category[];
  regions: Region[];
  createdAt: string;
  source: string; // Article ID or page where lead was generated
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  createdAt: string;
}
