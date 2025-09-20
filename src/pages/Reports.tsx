import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp,
  Heart,
  Brain,
  Activity,
  Clock
} from "lucide-react";

export const Reports = () => {
  // Mock reports data
  const reports = [
    {
      id: 1,
      title: "Weekly Health Summary",
      date: "January 15, 2025",
      type: "weekly",
      status: "completed",
      summary: "Your stroke risk factors are well-managed this week! 🎉 Keep up the great work with your medication adherence.",
      keyMetrics: {
        heartRate: "Stable (avg 72 BPM)",
        bloodPressure: "Well controlled",
        strokeRisk: "Low"
      },
      recommendations: [
        "Continue current medication schedule",
        "Maintain regular exercise routine", 
        "Stay hydrated - aim for 8 glasses daily"
      ]
    },
    {
      id: 2,
      title: "Monthly Stroke Risk Assessment",
      date: "January 1, 2025", 
      type: "monthly",
      status: "completed",
      summary: "Excellent progress in reducing stroke risk factors. Your blood pressure management has improved significantly. 💧",
      keyMetrics: {
        heartRate: "Improved (avg 70 BPM)",
        bloodPressure: "Excellent control",
        strokeRisk: "Very Low"
      },
      recommendations: [
        "Consider adding omega-3 supplements",
        "Schedule yearly cardiovascular checkup",
        "Keep stress levels low with meditation"
      ]
    },
    {
      id: 3,
      title: "Weekly Health Summary", 
      date: "January 8, 2025",
      type: "weekly",
      status: "completed",
      summary: "Minor increase in stress levels detected. Consider relaxation techniques and ensure adequate sleep. 😴",
      keyMetrics: {
        heartRate: "Slightly elevated (avg 78 BPM)",
        bloodPressure: "Normal range", 
        strokeRisk: "Low"
      },
      recommendations: [
        "Practice deep breathing exercises",
        "Ensure 7-8 hours of sleep nightly",
        "Reduce caffeine intake after 2 PM"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'weekly': return 'bg-blue-100 text-blue-700';
      case 'monthly': return 'bg-purple-100 text-purple-700';
      case 'quarterly': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'weekly': return <Calendar className="h-4 w-4" />;
      case 'monthly': return <TrendingUp className="h-4 w-4" />;
      case 'quarterly': return <Brain className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              AI Health Reports
            </h1>
            <p className="text-muted-foreground">
              AI-generated insights and recommendations based on your health data.
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Report
            </Button>
            <Button variant="hero">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Total Reports</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mr-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Low</p>
                <p className="text-sm text-muted-foreground">Stroke Risk</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vitals-heart-rate/10 mr-4">
                <Heart className="h-6 w-6 text-vitals-heart-rate" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">92%</p>
                <p className="text-sm text-muted-foreground">Health Score</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.map((report) => (
            <Card key={report.id} className="glass hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      {getTypeIcon(report.type)}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{report.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-2 mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{report.date}</span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getTypeColor(report.type)}>
                      {report.type}
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {report.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* AI Summary */}
                <div className="bg-gradient-card rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-primary" />
                    AI Summary
                  </h4>
                  <p className="text-muted-foreground">{report.summary}</p>
                </div>

                {/* Key Metrics */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Activity className="h-4 w-4 mr-2 text-primary" />
                    Key Metrics
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-sm font-medium text-foreground">Heart Rate</p>
                      <p className="text-sm text-muted-foreground">{report.keyMetrics.heartRate}</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-sm font-medium text-foreground">Blood Pressure</p>
                      <p className="text-sm text-muted-foreground">{report.keyMetrics.bloodPressure}</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-sm font-medium text-foreground">Stroke Risk</p>
                      <p className="text-sm text-muted-foreground">{report.keyMetrics.strokeRisk}</p>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    Recommendations
                  </h4>
                  <ul className="space-y-2">
                    {report.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Full Report
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Share with Doctor
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};