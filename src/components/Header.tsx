
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Category } from '@/types';

const categories: { label: string; value: Category; }[] = [
  { label: 'Market Trends', value: 'market-trends' },
  { label: 'Investment', value: 'investment' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Property Development', value: 'property-development' },
  { label: 'Mortgage', value: 'mortgage' },
  { label: 'Luxury', value: 'luxury' },
  { label: 'Policy', value: 'policy' },
  { label: 'Technology', value: 'technology' },
];

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-realestate-700">
            <span className="font-serif">RealNews</span>
            <span className="text-realestate-500 font-medium">Canada</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-4 w-4 mr-2" /> Search
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin">Admin</Link>
            </Button>
            <Button size="sm">Subscribe</Button>
          </div>
          
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="ml-2" asChild>
              <Link to="/admin">Admin</Link>
            </Button>
          </div>
        </div>
        
        {/* Search bar */}
        {searchOpen && (
          <div className="py-3 border-t animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for real estate news..." 
                className="pl-10"
                autoFocus
              />
            </div>
          </div>
        )}
        
        {/* Categories navigation */}
        <nav className="overflow-x-auto scrollbar-hide py-2">
          <ul className="flex space-x-6 whitespace-nowrap">
            {categories.map((category) => (
              <li key={category.value}>
                <Button variant="link" size="sm" className="text-sm" asChild>
                  <Link to={`/category/${category.value}`}>
                    {category.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
