import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Activity, 
  Brain, 
  Watch, 
  AlertTriangle, 
  MessageCircle,
  TrendingUp,
  Calendar,
  Plus
} from "lucide-react";

export const Dashboard = () => {
  const [isWearableConnected, setIsWearableConnected] = useState(false);

  // Mock data for demonstration
  const vitals = {
    heartRate: { current: 72, status: "normal", color: "text-vitals-heart-rate" },
    bloodPressure: { current: "120/80", status: "normal", color: "text-vitals-bp-normal" },
    stress: { current: "Low", status: "good", color: "text-vitals-stress-low" }
  };

  const recentAlerts = [
    { time: "2 hours ago", message: "Heart rate spike detected during exercise", type: "info" },
    { time: "Yesterday", message: "Daily check-in completed successfully", type: "success" },
    { time: "2 days ago", message: "Stress levels elevated - consider relaxation", type: "warning" }
  ];

  // Mock heart rate data for the last 7 days
  const heartRateData = [68, 71, 69, 74, 72, 70, 72];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Good morning! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's your cardiac health overview for today.
          </p>
        </div>

        {/* Wearable Connection Alert */}
        {!isWearableConnected && (
          <Card className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/20">
                  <Watch className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-300">
                    Connect Your Wearable Device
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-400">
                    Connect your fitness tracker to start monitoring your heart health in real-time.
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="border-amber-300 text-amber-700 hover:bg-amber-100 dark:border-amber-700 dark:text-amber-300"
                onClick={() => setIsWearableConnected(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Connect Device
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Vitals Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass hover:shadow-medium transition-smooth">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
                  <Heart className="h-4 w-4 text-vitals-heart-rate heart-beat" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-vitals-heart-rate">
                    {vitals.heartRate.current} BPM
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {vitals.heartRate.status}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-medium transition-smooth">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
                  <Activity className="h-4 w-4 text-vitals-bp-normal" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-vitals-bp-normal">
                    {vitals.bloodPressure.current}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {vitals.bloodPressure.status}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass hover:shadow-medium transition-smooth">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Stress Level</CardTitle>
                  <Brain className="h-4 w-4 text-vitals-stress-low" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-vitals-stress-low">
                    {vitals.stress.current}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {vitals.stress.status}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Heart Rate Chart */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>7-Day Heart Rate Trend</span>
                </CardTitle>
                <CardDescription>
                  Your heart rate patterns over the past week
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isWearableConnected ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-end h-32 px-4">
                      {heartRateData.map((rate, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2">
                          <div 
                            className="bg-gradient-primary rounded-t-md w-8 transition-smooth hover:scale-110"
                            style={{ height: `${(rate / 80) * 100}%` }}
                          />
                          <span className="text-xs text-muted-foreground font-medium">
                            {days[index]}
                          </span>
                          <span className="text-xs font-semibold text-primary">
                            {rate}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      Average: 71 BPM • Range: 68-74 BPM
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Watch className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Connect your wearable device to view heart rate trends
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Chatbot */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>AI Health Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">
                    💧 Remember to stay hydrated today! Your heart rate indicates you might need more water.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ask AI Assistant
                </Button>
              </CardContent>
            </Card>

            {/* Recent Alerts */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <span>Recent Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === 'success' ? 'bg-accent' :
                      alert.type === 'warning' ? 'bg-amber-500' :
                      'bg-secondary'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {alert.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {alert.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Check-up
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Log Symptoms
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Family
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};