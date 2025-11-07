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
import { useLanguage2, Language } from './Languages/VotingLanguageContext.tsx';
import { votingData } from './data/votingData.ts';

export function VotingPage() {
  const [selectedProposal, setSelectedProposal] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedWard, setSelectedWard] = useState('Ward 1');
  const { language, setLanguage, t } = useLanguage2();

  

const currentWardData = votingData[selectedWard as keyof typeof votingData];
const participationRate = currentWardData ? (currentWardData.votedCount / currentWardData.totalVoters) * 100
  : 0;


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
                 <SelectItem value="Ward 1">Ward 1 - Veer Savarkar Nagar Ward</SelectItem>
                 <SelectItem value="Ward 2">Ward 2 - Pt. Javaharlal Nehru Ward</SelectItem>
                 <SelectItem value="Ward 3">Ward 3 - Sant Kabir Das Ward</SelectItem>
                 <SelectItem value="Ward 4">Ward 4 - Yatiyatan Lal Ward</SelectItem>
                 <SelectItem value="Ward 5">Ward 5 - Banjari Mata Mandir Ward</SelectItem>
                 <SelectItem value="Ward 6">Ward 6 - Veerangani Avanti Bai Ward</SelectItem>
                 <SelectItem value="Ward 7">Ward 7 - Kushabhav Thakre</SelectItem>
                 <SelectItem value="Ward 8">Ward 8 - Pt. Motilal Nehru Ward</SelectItem>
                 <SelectItem value="Ward 9">Ward 9 - Doc. Bhimrav Ambedkar Ward</SelectItem>
                 <SelectItem value="Ward 10">Ward 10 - Rani Laxmi Bai Ward</SelectItem>
                 <SelectItem value="Ward 11">Ward 11 - Kalimata Ward</SelectItem>
                 <SelectItem value="Ward 12">Ward 12 - Mahatma Gandhi Ward</SelectItem>
                 <SelectItem value="Ward 13">Ward 13 - Rajiv Gandi Ward</SelectItem>
                 <SelectItem value="Ward 14">Ward 14 - Raman Mandir Ward</SelectItem>
                 <SelectItem value="Ward 15">Ward 15 - Kanhiya Lal Banjari Ward</SelectItem>
                 <SelectItem value="Ward 16">Ward 16 - Veer Shivaji Ward</SelectItem>
                 <SelectItem value="Ward 17">Ward 17 - Thakkar Bapa Ward</SelectItem>
                 <SelectItem value="Ward 18">Ward 18 - Bal Gangadhar Tilak Nagar</SelectItem>
                 <SelectItem value="Ward 19">Ward 19 - DR. A.P.J. ABDUL KALAM WARD</SelectItem>
                 <SelectItem value="Ward 20">Ward 20 - Ram Krishna Paramhans Ward</SelectItem>
                 <SelectItem value="Ward 21">Ward 21 - Shaheed Bhagat Singh Ward</SelectItem>
                 <SelectItem value="Ward 22">Ward 22 - Pandit Ishwaricharan Shukla Ward</SelectItem>
                 <SelectItem value="Ward 23">Ward 23 - Manmohan Singh Bakshi Ward</SelectItem>
                 <SelectItem value="Ward 24">Ward 24 - Vallab Bhai Patel Ward</SelectItem>
                 <SelectItem value="Ward 25">Ward 25 - Sant Ram Das Ward</SelectItem>
                 <SelectItem value="Ward 26">Ward 26 - Danveer Bhabhasaha Ward</SelectItem>
                 <SelectItem value="Ward 27">Ward 27 - Indra Gandhi Ward</SelectItem>
                 <SelectItem value="Ward 28">Ward 28 - Shaheed Hemu Kalyani Ward</SelectItem>
                 <SelectItem value="Ward 29">Ward 29 - Guru Govind Singh Ward</SelectItem>
                 <SelectItem value="Ward 30">Ward 30 - Shankar Nagar Ward</SelectItem>
                 <SelectItem value="Ward 31">Ward 31 - Neta Shubhaschandra Bose Ward</SelectItem>
                 <SelectItem value="Ward 32">Ward 32 - Maharishi Valmiki Ward</SelectItem>
                 <SelectItem value="Ward 33">Ward 33 - Veernarayan Singh Ward</SelectItem>
                 <SelectItem value="Ward 34">Ward 34 - Lal Bhadur Shastri Ward</SelectItem>
                 <SelectItem value="Ward 35">Ward 35 - Pandit Ravishankar Shukla Ward</SelectItem>
                 <SelectItem value="Ward 36">Ward 36 - Havaldar Abdul Hamid Ward</SelectItem>
                 <SelectItem value="Ward 37">Ward 37 - Tatyapara Ward Shaheed</SelectItem>
                 <SelectItem value="Ward 38">Ward 38 - Chudamani Nayak Ward</SelectItem>
                 <SelectItem value="Ward 39">Ward 39 - Swami Atmanand Ward</SelectItem>
                 <SelectItem value="Ward 40">Ward 40 - Thakur Pyare Lal Ward</SelectItem>
                 <SelectItem value="Ward 41">Ward 41 - Pt. Dindayal Uppadhye Ward</SelectItem>
                 <SelectItem value="Ward 42">Ward 42 - Pt. Sundar Lal Sharma Ward</SelectItem>
                 <SelectItem value="Ward 43">Ward 43 - Mahant Laxminarayn Das Ward</SelectItem>
                 <SelectItem value="Ward 44">Ward 44 - Bhramanpara Ward</SelectItem>
                 <SelectItem value="Ward 45">Ward 45 - Swami Vivakanand Ward</SelectItem>
                 <SelectItem value="Ward 46">Ward 46 - Mailana Abdul Rauf Ward</SelectItem>
                 <SelectItem value="Ward 47">Ward 47 - Civil Lines Ward</SelectItem>
                 <SelectItem value="Ward 48">Ward 48 - Mother Terisa Ward</SelectItem>
                 <SelectItem value="Ward 49">Ward 49 - Guru Ghasidas Ward</SelectItem>
                 <SelectItem value="Ward 50">Ward 50 - Rani Durgavati Ward</SelectItem>
                 <SelectItem value="Ward 51">Ward 51 - Doc. Rajendra Prasad Ward</SelectItem>
                 <SelectItem value="Ward 52">Ward 52 - PT. VIDYACHARAN SHUKLA WARD</SelectItem>
                 <SelectItem value="Ward 53">Ward 53 - Babu Jagjivan Ram Ward</SelectItem>
                 <SelectItem value="Ward 54">Ward 54 - KAMRED SUDHIR MUKHARJEE WARD</SelectItem>
                 <SelectItem value="Ward 55">Ward 55 - Ravindra Nath Taigore Ward</SelectItem>
                 <SelectItem value="Ward 56">Ward 56 - Arvind Dikshit Ward</SelectItem>
                 <SelectItem value="Ward 57">Ward 57 - Pt. Bhagwati Charan Shukla Ward</SelectItem>
                 <SelectItem value="Ward 58">Ward 58 - Shaheed Pankaj Vikaram Ward</SelectItem>
                 <SelectItem value="Ward 59">Ward 59 - Mureshwar Rao Gandre Ward</SelectItem>
                 <SelectItem value="Ward 60">Ward 60 - Chandrashekhar Aazad Ward</SelectItem>
                 <SelectItem value="Ward 61">Ward 61 - Doc. Shyam Prasad Mukhrji</SelectItem>
                 <SelectItem value="Ward 62">Ward 62 - Shaheed Rajiv Pard Ward</SelectItem>
                 <SelectItem value="Ward 63">Ward 63 - Brigediyar Usman Ward</SelectItem>
                 <SelectItem value="Ward 64">Ward 64 - Doc. Vipin Bihari Sur Ward</SelectItem>
                 <SelectItem value="Ward 65">Ward 65 - Mahamaya Mandir Ward</SelectItem>
                 <SelectItem value="Ward 66">Ward 66 - Vaman Rao Lakhe Ward</SelectItem>
                 <SelectItem value="Ward 67">Ward 67 - BHAKTMΑΤΑ KARMA WARD</SelectItem>
                 <SelectItem value="Ward 68">Ward 68 - Doc. Khubchand Baghel Ward</SelectItem>
                 <SelectItem value="Ward 69">Ward 69 - Madhav Rav Sapre Ward</SelectItem>
                 <SelectItem value="Ward 70">Ward 70 - Sant Ravidas Ward</SelectItem>
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