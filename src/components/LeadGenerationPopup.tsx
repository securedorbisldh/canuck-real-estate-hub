
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Category } from '@/types';

const interestOptions: { label: string; value: Category }[] = [
  { label: 'Market Trends', value: 'market-trends' },
  { label: 'Investment Opportunities', value: 'investment' },
  { label: 'Residential Properties', value: 'residential' },
  { label: 'Commercial Real Estate', value: 'commercial' },
  { label: 'Mortgage Rates', value: 'mortgage' },
];

interface LeadGenerationPopupProps {
  triggerTime?: number; // Time in seconds to wait before showing popup
}

const LeadGenerationPopup = ({ triggerTime = 30 }: LeadGenerationPopupProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<Category[]>([]);
  
  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('leadPopupShown');
    if (popupShown) return;
    
    // Set timer to show popup after specified time
    const timer = setTimeout(() => {
      setOpen(true);
      setHasShown(true);
      sessionStorage.setItem('leadPopupShown', 'true');
    }, triggerTime * 1000);
    
    return () => clearTimeout(timer);
  }, [triggerTime]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock API call to save lead
    console.log('Lead captured:', { name, email, interests });
    
    toast({
      title: "Thank you!",
      description: "We'll keep you updated with the latest real estate insights.",
    });
    
    setOpen(false);
    setName('');
    setEmail('');
    setInterests([]);
  };
  
  const toggleInterest = (interest: Category) => {
    setInterests(current => 
      current.includes(interest)
        ? current.filter(i => i !== interest)
        : [...current, interest]
    );
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-serif text-realestate-700">
            Stay Ahead in Real Estate
          </DialogTitle>
          <DialogDescription className="text-center">
            Join our community to receive personalized real estate insights straight to your inbox.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-3">
            <Label>What are you interested in?</Label>
            <div className="grid grid-cols-1 gap-2">
              {interestOptions.map((interest) => (
                <div key={interest.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest.value}
                    checked={interests.includes(interest.value)}
                    onCheckedChange={() => toggleInterest(interest.value)}
                  />
                  <Label htmlFor={interest.value} className="text-sm font-normal">
                    {interest.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <Button type="submit" className="w-full">Subscribe Now</Button>
          
          <p className="text-xs text-center text-muted-foreground">
            By subscribing, you agree to receive real estate news and updates. You can unsubscribe at any time.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadGenerationPopup;
