import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Heart, User, Mail, Phone, Users, Watch, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    height: "",
    weight: "",
    email: "",
    phone: "",
    emergencyContact1: { name: "", phone: "" },
    emergencyContact2: { name: "", phone: "" },
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEmergencyContactChange = (contactIndex: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [`emergencyContact${contactIndex}`]: {
        ...prev[`emergencyContact${contactIndex}` as keyof typeof prev] as any,
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const wearableOptions = [
    { name: "Google Fit", icon: "🔗", color: "text-blue-600" },
    { name: "Fitbit", icon: "⌚", color: "text-green-600" },
    { name: "Apple Watch", icon: "⌚", color: "text-gray-800" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between p-6">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary heart-beat" fill="currentColor" />
            <span className="text-xl font-bold bg-gradient-healing bg-clip-text text-transparent">
              HeartClutch
            </span>
          </Link>
          <Link to="/signin">
            <Button variant="ghost">Already have an account?</Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl mt-20">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Step {step} of 2
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {step === 1 ? "Personal Information" : "Emergency Contacts & Wearables"}
            </span>
          </div>
          <Progress value={step * 50} className="h-2" />
        </div>

        <Card className="glass shadow-large">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold">
              {step === 1 ? "Create Your Account" : "Complete Your Setup"}
            </CardTitle>
            <p className="text-muted-foreground">
              {step === 1 
                ? "Let's start with your basic information"
                : "Add emergency contacts and connect your wearable device"
              }
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4 fade-in">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="transition-smooth focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={formData.dob}
                      onChange={(e) => handleInputChange("dob", e.target.value)}
                      className="transition-smooth focus:scale-105"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      placeholder="170"
                      value={formData.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                      className="transition-smooth focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      placeholder="70"
                      value={formData.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                      className="transition-smooth focus:scale-105"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="transition-smooth focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="transition-smooth focus:scale-105"
                  />
                </div>

                {/* Google OAuth Alternative */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 fade-in">
                {/* Emergency Contacts */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Emergency Contacts (Optional)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Add up to 2 emergency contacts who will be notified if your vitals indicate distress.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Label>Emergency Contact 1</Label>
                      <Input
                        placeholder="Name"
                        value={formData.emergencyContact1.name}
                        onChange={(e) => handleEmergencyContactChange(1, "name", e.target.value)}
                      />
                      <Input
                        placeholder="Phone"
                        value={formData.emergencyContact1.phone}
                        onChange={(e) => handleEmergencyContactChange(1, "phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label>Emergency Contact 2</Label>
                      <Input
                        placeholder="Name"
                        value={formData.emergencyContact2.name}
                        onChange={(e) => handleEmergencyContactChange(2, "name", e.target.value)}
                      />
                      <Input
                        placeholder="Phone"
                        value={formData.emergencyContact2.phone}
                        onChange={(e) => handleEmergencyContactChange(2, "phone", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Wearable Devices */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Watch className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Connect Your Wearable</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Connect your wearable device to start monitoring your heart health.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {wearableOptions.map((option, index) => (
                      <Button
                        key={index}
                        variant="vitals"
                        className="h-20 flex-col space-y-2"
                      >
                        <span className="text-2xl">{option.icon}</span>
                        <span className="text-sm font-medium">{option.name}</span>
                      </Button>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    Skip for now (you can connect later)
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {step > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
              )}
              
              <div className="flex-1 flex justify-end">
                {step < 2 ? (
                  <Button onClick={nextStep} variant="hero">
                    Next Step
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Link to="/dashboard">
                    <Button variant="hero">
                      <Heart className="h-4 w-4 mr-2" />
                      Complete Setup
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};