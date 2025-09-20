import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Smartphone, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-heart-wearable.jpg";

export const Landing = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "AI-Powered Insights",
      description: "Get personalized cardiac health analysis powered by advanced AI algorithms."
    },
    {
      icon: <Heart className="h-8 w-8 text-vitals-heart-rate" />,
      title: "SOS Alerting",
      description: "Instant emergency alerts to your loved ones when your vitals indicate distress."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Trend Analysis",
      description: "Track your heart health patterns over time with comprehensive data visualization."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Family Support",
      description: "Connect with family members to share health updates and provide mutual support."
    }
  ];

  const trustBadges = [
    { text: "Backed by AI", icon: <Zap className="h-5 w-5" /> },
    { text: "HIPAA Compliant", icon: <Shield className="h-5 w-5" /> },
    { text: "Device Compatible", icon: <Smartphone className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary heart-beat" fill="currentColor" />
              <span className="text-xl font-bold bg-gradient-healing bg-clip-text text-transparent">
                StrokeGuard
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="hero" size="lg">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your heart.{" "}
                  <span className="bg-gradient-healing bg-clip-text text-transparent">
                    Understood.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  AI-powered stroke monitoring that connects your wearable data 
                  with intelligent insights, emergency alerts, and family support.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button variant="hero" size="hero" className="w-full sm:w-auto">
                    <Heart className="h-5 w-5 mr-2" />
                    Start Monitoring
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-6">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                    {badge.icon}
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative gentle-bounce">
              <div className="relative bg-gradient-card rounded-3xl p-8 shadow-large">
                <img
                  src={heroImage}
                  alt="Heart monitoring with wearable device"
                  className="w-full h-auto rounded-2xl shadow-medium"
                />
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-glow">
                  <Heart className="h-6 w-6 heart-beat" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Comprehensive Stroke Prevention
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to monitor, understand, and prevent stroke risk,
              all in one intelligent platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group glass hover:shadow-large transition-smooth hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-healing">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-primary-foreground">
            Ready to take control of your stroke prevention?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Join thousands of users who trust StrokeGuard for their stroke monitoring needs.
          </p>
          <Link to="/signup">
            <Button variant="outline" size="hero" className="bg-white text-primary hover:bg-white/90">
              <Heart className="h-5 w-5 mr-2" />
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-primary" fill="currentColor" />
            <span className="text-lg font-bold text-foreground">StrokeGuard</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 StrokeGuard. Your stroke prevention, our priority.
          </p>
        </div>
      </footer>
    </div>
  );
};