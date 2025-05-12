
import { Article, Category, Region } from '@/types';

// Mock data for demo purposes
export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Toronto Housing Market Shows Signs of Recovery in Q2 2025',
    summary: "After a challenging start to the year, Toronto's real estate market is showing promising signs of recovery with increased sales volume and stabilizing prices.",
    content: `<p>Toronto's housing market is showing clear signs of recovery in the second quarter of 2025, according to the latest data from the Toronto Regional Real Estate Board (TRREB).</p>
              <p>Sales increased by 12.5% compared to the same period last year, while new listings rose by only 8%, creating slightly more competitive conditions for buyers. The average selling price for all home types combined increased by 4.2% year-over-year to $1,150,000.</p>
              <h2>Market Segment Performance</h2>
              <p>Detached homes led the recovery with a 15.3% sales increase and a 5.1% price appreciation. Condominiums also performed well with sales up 11.2%, though price growth was more modest at 2.8%.</p>
              <p>Market analysts attribute this recovery to several factors, including:</p>
              <ul>
                <li>Stabilizing interest rates after the Bank of Canada's recent policy decisions</li>
                <li>Strong employment growth in the Greater Toronto Area</li>
                <li>Renewed confidence among first-time homebuyers</li>
                <li>Continued population growth through immigration</li>
              </ul>
              <h2>Regional Variations</h2>
              <p>The recovery isn't uniform across the region. Downtown Toronto and areas with good transit access are seeing the strongest price appreciation, while some suburbs are still experiencing more balanced market conditions.</p>
              <p>"We're seeing a return to more normal market conditions after a period of adjustment," said TRREB's Chief Market Analyst. "Buyers who were sitting on the sidelines are gradually returning to the market as they gain confidence in the direction of housing prices and interest rates."</p>
              <p>Looking ahead, analysts expect the recovery to continue at a moderate pace through the remainder of 2025, provided that interest rates remain stable and economic conditions continue to support housing demand.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop',
    sourceUrl: 'https://example.com/toronto-housing-recovery',
    sourceName: 'STOREYS',
    publishDate: '2025-05-10T14:30:00Z',
    categories: ['market-trends', 'residential'],
    regions: ['toronto'],
    featured: true,
    approved: true
  },
  {
    id: '2',
    title: 'Vancouver Commercial Real Estate Faces Challenges Amid Office Space Surplus',
    summary: "Vancouver's commercial real estate market is grappling with an oversupply of office space as remote work trends persist into 2025.",
    content: `<p>Vancouver's commercial real estate sector is facing significant challenges as office vacancy rates climb to 16.8% in the downtown core, the highest level in over a decade.</p>
              <p>The surplus of available office space is primarily attributed to the continued prevalence of remote and hybrid work arrangements, which have become a permanent feature of the corporate landscape following the pandemic years.</p>
              <p>"Companies are reevaluating their space needs and many are downsizing or adopting more flexible arrangements," explains a senior analyst at a leading commercial real estate firm. "We're seeing a trend toward high-quality, amenity-rich spaces but in smaller footprints."</p>
              <h2>Adaptation Strategies</h2>
              <p>Building owners and developers are responding to these challenges in several ways:</p>
              <ul>
                <li>Converting older office buildings to residential or mixed-use developments</li>
                <li>Upgrading existing spaces with modern amenities and flexible configurations</li>
                <li>Offering more flexible lease terms to attract tenants</li>
                <li>Creating premium shared workspaces that companies can use on-demand</li>
              </ul>
              <h2>Investment Implications</h2>
              <p>Despite the challenges in the office sector, other segments of Vancouver's commercial real estate market are performing well. Industrial properties continue to see strong demand and low vacancy rates, driven by e-commerce and supply chain reorganization.</p>
              <p>Retail properties in high-traffic urban locations are also recovering, though secondary locations continue to struggle with reduced foot traffic.</p>
              <p>Investors are increasingly selective, focusing on properties with strong tenant covenants and modern features that can command premium rents despite the overall market conditions.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2296&auto=format&fit=crop',
    sourceUrl: 'https://example.com/vancouver-commercial-challenges',
    sourceName: 'RENX',
    publishDate: '2025-05-08T09:15:00Z',
    categories: ['commercial', 'market-trends'],
    regions: ['vancouver'],
    approved: true
  },
  {
    id: '3',
    title: 'New Federal Policy Aims to Boost Housing Supply Through Zoning Reform',
    summary: 'The Canadian government has unveiled a new initiative to incentivize municipalities to reform zoning laws and accelerate housing development.',
    content: `<p>In a bold move to address Canada's persistent housing shortage, the federal government has announced a comprehensive policy package aimed at boosting housing supply through municipal zoning reforms.</p>
              <p>The initiative, named the "Housing Acceleration Partnership," will provide $5 billion in funding over five years to municipalities that implement specific zoning changes designed to increase density and streamline the development approval process.</p>
              <h2>Key Policy Elements</h2>
              <p>The program includes several key components:</p>
              <ul>
                <li>Financial incentives for municipalities that eliminate single-family exclusive zoning</li>
                <li>Grants for updating and digitizing permit approval systems</li>
                <li>Funding for infrastructure upgrades in areas targeted for increased density</li>
                <li>Technical assistance to help smaller municipalities implement best practices</li>
              </ul>
              <p>"This represents a significant shift in how the federal government approaches housing policy," said the Minister of Housing. "By directly incentivizing zoning reform, we're addressing one of the root causes of our housing supply shortage."</p>
              <h2>Industry Reaction</h2>
              <p>The development industry has responded positively to the announcement. "These reforms could meaningfully reduce the time and cost involved in bringing new housing to market," said the president of the Canadian Home Builders' Association.</p>
              <p>Urban planning experts also welcome the move but emphasize that results will depend on municipal implementation. "The incentives are significant, but municipalities will need to overcome local opposition to density in many cases," noted a professor of urban planning at the University of Toronto.</p>
              <p>The program is set to launch next quarter, with the first funding decisions expected before the end of the year.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074&auto=format&fit=crop',
    sourceUrl: 'https://example.com/federal-zoning-reform',
    sourceName: 'Better Dwelling',
    publishDate: '2025-05-07T11:45:00Z',
    categories: ['policy', 'property-development'],
    regions: ['national'],
    approved: true
  },
  {
    id: '4',
    title: 'Montreal Luxury Real Estate Market Reaches New Heights',
    summary: "Montreal's luxury property segment is experiencing unprecedented growth as international buyers and wealthy Canadians invest in the city's high-end real estate.",
    content: `<p>Montreal's luxury real estate market is reaching unprecedented heights, with sales of properties over $4 million increasing by 35% in the first quarter of 2025 compared to the same period last year.</p>
              <p>This surge in high-end transactions comes as Montreal continues to gain recognition as a global city offering exceptional quality of life at prices that remain competitive compared to Toronto and Vancouver.</p>
              <h2>Buyer Demographics</h2>
              <p>The luxury buyer profile in Montreal is evolving, according to local real estate experts. While wealthy locals remain active in the market, there has been a notable increase in buyers from other provinces and international locations.</p>
              <p>"We're seeing significant interest from European buyers who appreciate Montreal's cultural offerings and French connection," explains a broker specializing in luxury properties. "There's also growing interest from wealthy immigrants choosing Montreal as their Canadian destination."</p>
              <h2>Popular Neighborhoods</h2>
              <p>Westmount and Outremont continue to be the most sought-after neighborhoods for luxury buyers, but new developments in downtown Montreal and the Old Port area are also attracting significant interest.</p>
              <p>The most coveted properties combine historic architecture with modern renovations, though newly built luxury condominiums with extensive amenities are increasingly popular among international buyers.</p>
              <h2>Market Outlook</h2>
              <p>Experts predict continued strength in Montreal's luxury market, citing several factors:</p>
              <ul>
                <li>Relatively affordable luxury pricing compared to other global cities</li>
                <li>Strong cultural and educational institutions</li>
                <li>Improving international transportation connections</li>
                <li>Growing recognition of Montreal's quality of life advantages</li>
              </ul>
              <p>"Montreal offers exceptional value in the luxury segment," notes a market analyst. "Buyers can acquire properties here that would cost two or three times as much in other major North American cities."</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    sourceUrl: 'https://example.com/montreal-luxury-market',
    sourceName: 'WOWA.ca',
    publishDate: '2025-05-05T16:20:00Z',
    categories: ['luxury', 'market-trends'],
    regions: ['montreal'],
    approved: true
  },
  {
    id: '5',
    title: 'PropTech Innovations Transforming Canadian Real Estate Management',
    summary: 'New property technology solutions are revolutionizing how Canadian properties are managed, marketed, and maintained.',
    content: `<p>A wave of property technology (PropTech) innovations is transforming Canada's real estate management landscape, offering solutions to long-standing industry challenges and creating new opportunities for efficiency and service enhancement.</p>
              <p>These technological advancements span the entire property lifecycle, from construction and acquisition to management and eventual disposition.</p>
              <h2>Key Innovation Areas</h2>
              <h3>Smart Building Systems</h3>
              <p>Advanced IoT sensors and integrated building management systems are becoming standard in new developments and retrofitted into existing buildings. These systems provide real-time monitoring of building performance, predictive maintenance capabilities, and significant energy savings.</p>
              <p>"The ROI on smart building technology has become compelling," explains a sustainability director at a major property management firm. "We're seeing 15-20% reductions in energy costs and substantial decreases in unexpected maintenance events."</p>
              <h3>Tenant Experience Platforms</h3>
              <p>Mobile applications that connect tenants with building services, community events, and local amenities are gaining widespread adoption. These platforms also streamline communication between property managers and occupants.</p>
              <p>"Tenant satisfaction scores have increased by 28% since implementing our digital experience platform," reports the operations manager of a major office portfolio. "It's become an essential differentiator in a competitive leasing environment."</p>
              <h3>AI-Powered Analytics</h3>
              <p>Artificial intelligence is being deployed to analyze property performance, optimize pricing strategies, and identify market opportunities. These tools process vast quantities of data to deliver actionable insights that were previously inaccessible to all but the largest organizations.</p>
              <h2>Adoption Challenges</h2>
              <p>Despite clear benefits, the adoption of PropTech solutions faces several obstacles:</p>
              <ul>
                <li>Integration difficulties with legacy systems</li>
                <li>Privacy and cybersecurity concerns</li>
                <li>Training requirements for staff and occupants</li>
                <li>Initial implementation costs</li>
              </ul>
              <p>Industry experts predict continued rapid innovation in this space, with particular growth expected in sustainability-focused technologies as buildings face increasing pressure to reduce carbon footprints.</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    sourceUrl: 'https://example.com/proptech-innovations',
    sourceName: 'REM',
    publishDate: '2025-05-03T10:00:00Z',
    categories: ['technology', 'commercial', 'residential'],
    regions: ['national'],
    approved: true
  },
  {
    id: '6',
    title: 'Calgary Investment Properties Show Strong ROI Amid Economic Diversification',
    summary: "Investors are increasingly turning to Calgary real estate as the city's economy diversifies beyond oil and gas, driving attractive returns.",
    content: `<p>Calgary's investment property market is delivering robust returns as the city's economy continues to diversify beyond its traditional oil and gas base.</p>
              <p>Recent data shows average cap rates for multifamily residential properties ranging from 5.2% to 6.5%, significantly higher than those found in Toronto or Vancouver.</p>
              <h2>Economic Drivers</h2>
              <p>Calgary's economic transformation has accelerated in recent years, with significant growth in sectors including:</p>
              <ul>
                <li>Technology and software development</li>
                <li>Renewable energy</li>
                <li>Film and television production</li>
                <li>Transportation and logistics</li>
                <li>Healthcare and life sciences</li>
              </ul>
              <p>"We're seeing a much more resilient Calgary economy that's no longer riding the boom-bust cycle of oil prices," explains a local economic development official. "This diversification is creating sustained demand for both residential and commercial real estate."</p>
              <h2>Investment Hotspots</h2>
              <p>Several areas of the city are particularly attractive to investors:</p>
              <p><strong>Beltline:</strong> This central neighborhood continues to densify with new residential towers and amenities, attracting young professionals and delivering strong rental returns.</p>
              <p><strong>East Village:</strong> Once overlooked, this area has been transformed by significant public and private investment, with new residential and retail developments.</p>
              <p><strong>Suburban multifamily:</strong> Areas with good transit connections and proximity to the new Green Line LRT route are seeing strong investor interest.</p>
              <h2>Investor Profile</h2>
              <p>The investor base is also diversifying. While local investors remain active, there's increasing interest from institutional investors and individuals from other provinces seeking better returns than they can achieve in more expensive markets.</p>
              <p>"We're working with more Toronto and Vancouver-based investors than ever before," notes a Calgary real estate investment specialist. "They're recognizing the value proposition Calgary offers compared to their home markets."</p>`,
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop',
    sourceUrl: 'https://example.com/calgary-investment',
    sourceName: 'Real Estate Recap',
    publishDate: '2025-04-30T13:15:00Z',
    categories: ['investment', 'market-trends'],
    regions: ['calgary'],
    approved: true
  },
];

// Filter articles by category, region, and sort by date
export const filterArticles = (
  articles: Article[],
  filters: {
    category?: Category;
    region?: Region;
    sort?: string;
    approved?: boolean;
  }
): Article[] => {
  let filtered = [...articles];
  
  // Filter by approval status
  if (filters.approved !== undefined) {
    filtered = filtered.filter(article => article.approved === filters.approved);
  }
  
  // Filter by category
  if (filters.category) {
    filtered = filtered.filter(article => 
      article.categories.includes(filters.category as Category)
    );
  }
  
  // Filter by region
  if (filters.region) {
    filtered = filtered.filter(article => 
      article.regions.includes(filters.region as Region)
    );
  }
  
  // Sort articles
  if (filters.sort) {
    filtered.sort((a, b) => {
      const dateA = new Date(a.publishDate).getTime();
      const dateB = new Date(b.publishDate).getTime();
      
      if (filters.sort === 'newest') {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
  }
  
  return filtered;
};

// Get an article by ID
export const getArticleById = (id: string): Article | undefined => {
  return MOCK_ARTICLES.find(article => article.id === id);
};

// Get featured articles
export const getFeaturedArticle = (): Article | undefined => {
  return MOCK_ARTICLES.find(article => article.featured);
};

// Get recommended articles based on current article
export const getRecommendedArticles = (currentArticleId: string, count = 3): Article[] => {
  const currentArticle = getArticleById(currentArticleId);
  if (!currentArticle) return [];
  
  // Get articles with similar categories or regions
  let recommended = MOCK_ARTICLES.filter(article => 
    article.id !== currentArticleId && 
    (
      article.categories.some(cat => currentArticle.categories.includes(cat)) ||
      article.regions.some(reg => currentArticle.regions.includes(reg))
    )
  );
  
  // Limit to requested count
  return recommended.slice(0, count);
};
