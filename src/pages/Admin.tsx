
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Article, Lead } from '@/types';
import { MOCK_ARTICLES, filterArticles } from '@/utils/articleUtils';

// Mock leads data
const MOCK_LEADS: Lead[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    interests: ['investment', 'commercial'],
    regions: ['toronto', 'vancouver'],
    createdAt: '2025-05-10T14:30:00Z',
    source: '1'
  },
  {
    id: '2',
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    interests: ['residential', 'market-trends'],
    regions: ['calgary'],
    createdAt: '2025-05-09T10:15:00Z',
    source: '2'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    interests: ['mortgage', 'policy'],
    regions: ['national', 'ottawa'],
    createdAt: '2025-05-08T16:45:00Z',
    source: '3'
  },
];

const Admin = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pendingArticles, setPendingArticles] = useState<Article[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    // In a real app, we would fetch these from an API
    const allArticles = MOCK_ARTICLES;
    const pending = allArticles.filter(a => !a.approved);
    const approved = allArticles.filter(a => a.approved);

    setPendingArticles(pending);
    setArticles(approved);
    setLeads(MOCK_LEADS);
  }, []);

  const approveArticle = (id: string) => {
    // In a real app, we would call an API to approve the article
    setPendingArticles(prev => prev.filter(a => a.id !== id));
    // Also add it to the approved articles list with approved=true
    console.log('Article approved:', id);
  };

  const deleteArticle = (id: string) => {
    // In a real app, we would call an API to delete the article
    setPendingArticles(prev => prev.filter(a => a.id !== id));
    console.log('Article deleted:', id);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-serif font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage content and monitor lead generation.
          </p>
        </div>
        
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Published Articles</CardTitle>
                  <CardDescription>Total approved articles</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">{articles.length}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Pending Review</CardTitle>
                  <CardDescription>Articles awaiting approval</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">{pendingArticles.length}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Leads Generated</CardTitle>
                  <CardDescription>Total leads collected</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">{leads.length}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="content">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Approval Queue</CardTitle>
                  <CardDescription>
                    Review and approve new content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {pendingArticles.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Source</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pendingArticles.map((article) => (
                          <TableRow key={article.id}>
                            <TableCell className="font-medium">{article.title}</TableCell>
                            <TableCell>{article.sourceName}</TableCell>
                            <TableCell>{formatDate(article.publishDate)}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button size="sm" onClick={() => approveArticle(article.id)}>Approve</Button>
                                <Button size="sm" variant="outline">Edit</Button>
                                <Button size="sm" variant="destructive" onClick={() => deleteArticle(article.id)}>Delete</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <p className="py-4 text-center text-muted-foreground">No articles pending approval.</p>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Published Content</CardTitle>
                  <CardDescription>
                    All approved articles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Categories</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {articles.slice(0, 5).map((article) => (
                        <TableRow key={article.id}>
                          <TableCell className="font-medium truncate max-w-xs">{article.title}</TableCell>
                          <TableCell>{article.sourceName}</TableCell>
                          <TableCell>{formatDate(article.publishDate)}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {article.categories.slice(0, 2).map(category => (
                                <Badge key={category} variant="secondary" className="text-xs">
                                  {category.replace('-', ' ')}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="leads">
            <Card>
              <CardHeader>
                <CardTitle>Lead Management</CardTitle>
                <CardDescription>
                  Collected lead information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    Total Leads: {leads.length}
                  </h3>
                  <Button>Export CSV</Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Interests</TableHead>
                      <TableHead>Source</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell className="font-medium">{lead.name}</TableCell>
                        <TableCell>{lead.email}</TableCell>
                        <TableCell>{formatDate(lead.createdAt)}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {lead.interests.slice(0, 2).map(interest => (
                              <Badge key={interest} variant="outline" className="text-xs">
                                {interest.replace('-', ' ')}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>Article #{lead.source}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-gray-100 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2025 RealNewsCanada Admin Portal</p>
        </div>
      </footer>
    </div>
  );
};

export default Admin;
