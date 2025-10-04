import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Vote, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  IndianRupee,
  MapPin,
  BarChart3,
  Info
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

export function VotingPage() {
  const [selectedProposal, setSelectedProposal] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedWard, setSelectedWard] = useState('Ward 1');
  const { t } = useLanguage();

  const votingData = {
    'Ward 1': {
      totalVoters: 3245,
      votedCount: 1876,
      timeRemaining: '3 days 12 hours',
      proposals: [
        {
          id: 'w1-p1',
          title: 'Smart LED Street Lighting',
          description: 'Replace old streetlights with energy-efficient LED lights',
          estimatedCost: 850000,
          votes: 543,
          percentage: 29,
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
        },
        {
          id: 'w1-p2',
          title: 'Community Health Center',
          description: 'Establish a basic health center with essential medical facilities',
          estimatedCost: 1200000,
          votes: 412,
          percentage: 22,
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop'
        },
        {
          id: 'w1-p3',
          title: 'Road Repair and Resurfacing',
          description: 'Fix potholes and resurface main roads for better connectivity',
          estimatedCost: 950000,
          votes: 921,
          percentage: 49,
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
        }
      ]
    },
    'Ward 2': {
      totalVoters: 2890,
      votedCount: 1234,
      timeRemaining: '3 days 12 hours',
      proposals: [
        {
          id: 'w2-p1',
          title: 'Children\'s Playground',
          description: 'Modern playground equipment with safety features for children',
          estimatedCost: 650000,
          votes: 398,
          percentage: 32,
          image: 'https://images.unsplash.com/photo-1544737151667-6e4b999de2a9?w=400&h=300&fit=crop'
        },
        {
          id: 'w2-p2',
          title: 'Water Supply Improvement',
          description: 'Upgrade water supply infrastructure for better coverage',
          estimatedCost: 1100000,
          votes: 512,
          percentage: 42,
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'
        },
        {
          id: 'w2-p3',
          title: 'Waste Management System',
          description: 'Implement door-to-door waste collection and recycling',
          estimatedCost: 750000,
          votes: 324,
          percentage: 26,
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
        }
      ]
    },
    'Ward 3': {
      totalVoters: 4156,
      votedCount: 2789,
      timeRemaining: '3 days 12 hours',
      proposals: [
        {
          id: 'w3-p1',
          title: 'Drainage System Upgrade',
          description: 'Prevent waterlogging during monsoon with improved drainage',
          estimatedCost: 2100000,
          votes: 1456,
          percentage: 52,
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
        },
        {
          id: 'w3-p2',
          title: 'Digital Library Setup',
          description: 'Modern library with computers and internet access',
          estimatedCost: 650000,
          votes: 823,
          percentage: 30,
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
        },
        {
          id: 'w3-p3',
          title: 'Solar Street Lighting',
          description: 'Eco-friendly solar-powered street lights',
          estimatedCost: 980000,
          votes: 510,
          percentage: 18,
          image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop'
        }
      ]
    }
  };

  const currentWardData = votingData[selectedWard as keyof typeof votingData];
  const participationRate = (currentWardData.votedCount / currentWardData.totalVoters) * 100;

  const handleVote = () => {
    if (selectedProposal) {
      setHasVoted(true);
      // In a real app, this would submit the vote to the backend
    }
  };

  const resetVote = () => {
    setHasVoted(false);
    setSelectedProposal('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('voting.title')}</h1>
          <p className="text-lg text-gray-600">{t('voting.subtitle')}</p>
        </div>

        {/* Voting Status Alert */}
        <Alert className="mb-8 border-primary bg-primary/5">
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertDescription className="text-primary">
            {t('voting.alert')}
          </AlertDescription>
        </Alert>

        {/* Ward Selection Dropdown */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('voting.selectWard')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedWard} onValueChange={setSelectedWard}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t('voting.selectWard')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ward 1">Ward 1 - Central Market</SelectItem>
                  <SelectItem value="Ward 2">Ward 2 - Residential</SelectItem>
                  <SelectItem value="Ward 3">Ward 3 - Industrial</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Ward Content */}
        <div className="mb-8">

          {/* Ward Statistics */}
          {votingData[selectedWard as keyof typeof votingData] && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{t('voting.totalVoters')}</p>
                        <p className="text-2xl font-bold">{currentWardData.totalVoters.toLocaleString()}</p>
                      </div>
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{t('voting.votesCast')}</p>
                        <p className="text-2xl font-bold">{currentWardData.votedCount.toLocaleString()}</p>
                      </div>
                      <Vote className="w-8 h-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{t('voting.participation')}</p>
                        <p className="text-2xl font-bold">{participationRate.toFixed(1)}%</p>
                      </div>
                      <BarChart3 className="w-8 h-8 text-secondary" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{t('voting.timeLeft')}</p>
                        <p className="text-lg font-bold">{currentWardData.timeRemaining}</p>
                      </div>
                      <Clock className="w-8 h-8 text-orange-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Participation Progress */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    {t('voting.votingProgress')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{t('voting.votesCast')}: {currentWardData.votedCount.toLocaleString()}</span>
                      <span>Target: {currentWardData.totalVoters.toLocaleString()}</span>
                    </div>
                    <Progress value={participationRate} className="h-3" />
                    <p className="text-sm text-gray-600">
                      {participationRate.toFixed(1)}% of registered voters have participated
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Voting Section */}
              {!hasVoted ? (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Vote className="w-5 h-5 mr-2" />
                      {t('voting.castYourVote')}
                    </CardTitle>
                    <CardDescription>
                      {t('voting.selectOne')} {selectedWard}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={selectedProposal} onValueChange={setSelectedProposal}>
                      <div className="space-y-4">
                        {currentWardData.proposals.map((proposal) => (
                          <div key={proposal.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                            <RadioGroupItem value={proposal.id} id={proposal.id} className="mt-2" />
                            <div className="flex-1">
                              <Label htmlFor={proposal.id} className="cursor-pointer">
                                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                                  <ImageWithFallback
                                    src={proposal.image}
                                    alt={proposal.title}
                                    className="w-full sm:w-24 h-24 object-cover rounded-lg"
                                  />
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 mb-1">{proposal.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{proposal.description}</p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                      <div className="flex items-center">
                                        <IndianRupee className="w-4 h-4 mr-1" />
                                        ₹{(proposal.estimatedCost / 100000).toFixed(1)}L
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                    
                    <div className="mt-6 flex justify-center">
                      <Button 
                        onClick={handleVote} 
                        disabled={!selectedProposal}
                        className="px-8"
                      >
                        <Vote className="w-4 h-4 mr-2" />
                        {t('voting.submitVote')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Alert className="mb-8 border-accent bg-accent/5">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <AlertDescription className="text-accent">
                    {t('voting.thankYou')}
                    <Button variant="link" onClick={resetVote} className="ml-2 p-0 h-auto text-accent">
                      {t('voting.voteAgain')}
                    </Button>
                  </AlertDescription>
                </Alert>
              )}

              {/* Current Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    {t('voting.currentResults')}
                  </CardTitle>
                  <CardDescription>
                    {t('voting.liveResults')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {currentWardData.proposals
                      .sort((a, b) => b.votes - a.votes)
                      .map((proposal, index) => (
                        <div key={proposal.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                                index === 0 ? 'bg-primary text-white' : 
                                index === 1 ? 'bg-secondary text-white' : 'bg-gray-300 text-gray-700'
                              }`}>
                                {index + 1}
                              </div>
                              <h4 className="font-semibold">{proposal.title}</h4>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold">{proposal.votes} {t('common.votes')}</div>
                              <div className="text-sm text-gray-600">{proposal.percentage}%</div>
                            </div>
                          </div>
                          <Progress value={proposal.percentage} className="h-2" />
                        </div>
                      ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-semibold mb-1">{t('voting.votingInfo')}</p>
                        <ul className="space-y-1 text-xs">
                          <li>{t('voting.anonymous')}</li>
                          <li>{t('voting.realTime')}</li>
                          <li>{t('voting.mostVotes')}</li>
                          <li>{t('voting.closesIn')} {currentWardData.timeRemaining}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}