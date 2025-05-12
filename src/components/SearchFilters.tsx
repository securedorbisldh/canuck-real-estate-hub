
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Category, Region } from '@/types';

interface FilterOption<T> {
  label: string;
  value: T;
}

const categoryOptions: FilterOption<Category>[] = [
  { label: 'All Categories', value: 'market-trends' },
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

const regionOptions: FilterOption<Region>[] = [
  { label: 'All Regions', value: 'national' },
  { label: 'National', value: 'national' },
  { label: 'Toronto', value: 'toronto' },
  { label: 'Vancouver', value: 'vancouver' },
  { label: 'Montreal', value: 'montreal' },
  { label: 'Calgary', value: 'calgary' },
  { label: 'Ottawa', value: 'ottawa' },
  { label: 'Edmonton', value: 'edmonton' },
  { label: 'Halifax', value: 'halifax' },
  { label: 'Winnipeg', value: 'winnipeg' },
];

const sortOptions = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
];

interface SearchFiltersProps {
  onFilterChange?: (filters: {
    category?: Category;
    region?: Region;
    sort: string;
  }) => void;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();
  const [selectedRegion, setSelectedRegion] = useState<Region | undefined>();
  const [selectedSort, setSelectedSort] = useState('newest');

  const handleFilterChange = () => {
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory,
        region: selectedRegion,
        sort: selectedSort,
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      <div className="w-full md:w-auto">
        <Select
          value={selectedCategory}
          onValueChange={(value: Category) => {
            setSelectedCategory(value);
            handleFilterChange();
          }}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categoryOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-auto">
        <Select
          value={selectedRegion}
          onValueChange={(value: Region) => {
            setSelectedRegion(value);
            handleFilterChange();
          }}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {regionOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-auto">
        <Select
          value={selectedSort}
          onValueChange={(value) => {
            setSelectedSort(value);
            handleFilterChange();
          }}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-auto md:ml-auto">
        <Button variant="outline" onClick={() => {
          setSelectedCategory(undefined);
          setSelectedRegion(undefined);
          setSelectedSort('newest');
          if (onFilterChange) {
            onFilterChange({
              category: undefined,
              region: undefined,
              sort: 'newest',
            });
          }
        }}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
