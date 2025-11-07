import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  FileText,
  Vote,
  FolderOpen,
  MapPin,
  IndianRupee,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import {wardData} from "./data/wardBudgetOverviewData";
import {announcements} from "./data/wardBudgetOverviewData";

interface HomepageProps {
  onNavigate: (page: string) => void;
}

export function Homepage({ onNavigate }: HomepageProps) {
  const { t } = useLanguage();

  const stats = [
    {
      title: t("homepage.stats.activeCitizens"),
      value: "12,450",
      icon: Users,
      change: "+2.1%",
    },
    {
      title: t("homepage.stats.totalBudget"),
      value: "₹1.95 Cr",
      icon: IndianRupee,
      change: "+5.4%",
    },
    {
      title: t("homepage.stats.completedProjects"),
      value: "156",
      icon: CheckCircle,
      change: "+12.3%",
    },
    {
      title: t("homepage.stats.proposalsSubmitted"),
      value: "89",
      icon: FileText,
      change: "+8.7%",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t("homepage.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {t("homepage.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 cursor-pointer"
                onClick={() => onNavigate("proposals")}
              >
                <FileText className="w-5 h-5 mr-2" />
                {t("homepage.hero.submitProposal")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary cursor-pointer"
                onClick={() => onNavigate("voting")}
              >
                <Vote className="w-5 h-5 mr-2" />
                {t("homepage.hero.voteNow")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary cursor-pointer"
                onClick={() => onNavigate("projects")}
              >
                <FolderOpen className="w-5 h-5 mr-2" />
                {t("homepage.hero.trackProjects")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-2">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.title}</div>
                    <div className="text-xs text-accent mt-1 flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("homepage.wardBudget.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("homepage.wardBudget.subtitle")}
            </p>
          </div>

          {/* Carousel Section */}
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {wardData.map((ward) => (
                <CarouselItem
                  key={ward.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-lg font-semibold">
                          {ward.name}
                        </span>
                        <MapPin className="w-5 h-5 text-gray-400" />
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Budget Progress */}
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">
                            {t("homepage.wardBudget.budgetAllocated")}
                          </span>
                          <span className="font-medium">
                            ₹{(ward.allocated / 100000).toFixed(1)}L / ₹
                            {(ward.totalBudget / 100000).toFixed(1)}L
                          </span>
                        </div>
                        <Progress
                          value={(ward.allocated / ward.totalBudget) * 100}
                          className="h-2 bg-gray-100"
                        />
                      </div>

                      {/* ward Section */}
                      <div className="flex justify-between">
                        <div className="text-center">
                          <div className="text-lg font-bold text-accent">
                            {ward.ongoing}
                          </div>
                          <div className="text-xs text-gray-600">
                            {t("homepage.wardBudget.ongoing")}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">
                            {ward.completed}
                          </div>
                          <div className="text-xs text-gray-600">
                            {t("homepage.wardBudget.completed")}
                          </div>
                        </div>
                      </div>

                      {/* View Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full cursor-pointer"
                        onClick={() => onNavigate("projects")}
                      >
                        {t("homepage.wardBudget.viewDetails")}
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <CarouselPrevious className="cursor-pointer hover:scale-105 transition-transform"/>
            <CarouselNext className="cursor-pointer hover:scale-105 transition-transform"/>
          </Carousel>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              News & Updates
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed about the latest developments
            </p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {announcements.map((announcement) => (
                <CarouselItem
                  key={announcement.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant={
                            announcement.type === "voting"
                              ? "default"
                              : announcement.type === "completed"
                              ? "outline"
                              : "secondary"
                          }
                          className={
                            announcement.type === "voting"
                              ? "bg-primary"
                              : announcement.type === "completed"
                              ? "border-accent text-accent"
                              : ""
                          }
                        >
                          {announcement.type === "voting"
                            ? "Active Voting"
                            : announcement.type === "completed"
                            ? "Completed"
                            : "Deadline"}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {announcement.date}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {announcement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {announcement.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer hover:scale-105 transition-transform"/>
            <CarouselNext className="cursor-pointer hover:scale-105 transition-transform"/>
          </Carousel>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600">
              Get started with these common actions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onNavigate("proposals")}
            >
              <CardContent className="pt-8 pb-6">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Submit New Proposal</h3>
                <p className="text-gray-600 mb-4">
                  Share your ideas for community development
                </p>
                <Button className="w-full cursor-pointer">Get Started</Button>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onNavigate("voting")}
            >
              <CardContent className="pt-8 pb-6">
                <Vote className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Vote on Proposals</h3>
                <p className="text-gray-600 mb-4">
                  Help decide which projects get funded
                </p>
                <Button variant="outline" className="w-full cursor-pointer">
                  Start Voting
                </Button>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onNavigate("projects")}
            >
              <CardContent className="pt-8 pb-6">
                <FolderOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Track Projects</h3>
                <p className="text-gray-600 mb-4">
                  Monitor the progress of approved projects
                </p>
                <Button variant="secondary" className="w-full cursor-pointer">
                  View Projects
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
