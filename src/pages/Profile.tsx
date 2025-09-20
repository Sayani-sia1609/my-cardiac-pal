import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  Camera,
  Save,
  Plus,
  Trash2,
  Watch,
  Smartphone,
  Settings,
  Shield
} from "lucide-react";

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    height: "175",
    weight: "70",
    dateOfBirth: "1985-06-15"
  });

  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: "Sarah Doe", phone: "+1 (555) 987-6543", relationship: "Spouse" },
    { id: 2, name: "Dr. Smith", phone: "+1 (555) 456-7890", relationship: "Doctor" }
  ]);

  const [connectedDevices] = useState([
    { 
      id: 1, 
      name: "Apple Watch Series 8", 
      type: "Apple Health",
      status: "connected",
      lastSync: "2 hours ago",
      icon: "⌚"
    },
    { 
      id: 2, 
      name: "iPhone Health App", 
      type: "Apple Health",
      status: "connected", 
      lastSync: "1 hour ago",
      icon: "📱"
    }
  ]);

  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const addEmergencyContact = () => {
    const newContact = {
      id: Date.now(),
      name: "",
      phone: "",
      relationship: ""
    };
    setEmergencyContacts(prev => [...prev, newContact]);
  };

  const removeEmergencyContact = (id: number) => {
    setEmergencyContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const updateEmergencyContact = (id: number, field: string, value: string) => {
    setEmergencyContacts(prev => prev.map(contact => 
      contact.id === id ? { ...contact, [field]: value } : contact
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Profile Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your personal information, emergency contacts, and connected devices.
          </p>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
            <TabsTrigger value="devices">Connected Devices</TabsTrigger>
            <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Personal Information</span>
                </CardTitle>
                <CardDescription>
                  Update your basic profile information and health metrics.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                      JD
                    </div>
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="absolute -bottom-2 -right-2 rounded-full w-8 h-8"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Profile Picture</h3>
                    <p className="text-sm text-muted-foreground">
                      Upload a new profile picture
                    </p>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => handleProfileChange("name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileChange("email", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => handleProfileChange("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => handleProfileChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      value={profileData.height}
                      onChange={(e) => handleProfileChange("height", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      value={profileData.weight}
                      onChange={(e) => handleProfileChange("weight", e.target.value)}
                    />
                  </div>
                </div>

                <Button variant="hero">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>Emergency Contacts</span>
                    </CardTitle>
                    <CardDescription>
                      Manage your emergency contacts who will be notified during critical health events.
                    </CardDescription>
                  </div>
                  <Button variant="outline" onClick={addEmergencyContact}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Contact
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {emergencyContacts.map((contact) => (
                  <div key={contact.id} className="border border-border rounded-lg p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Name</Label>
                        <Input
                          value={contact.name}
                          onChange={(e) => updateEmergencyContact(contact.id, "name", e.target.value)}
                          placeholder="Contact name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input
                          value={contact.phone}
                          onChange={(e) => updateEmergencyContact(contact.id, "phone", e.target.value)}
                          placeholder="Phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Relationship</Label>
                        <div className="flex space-x-2">
                          <Input
                            value={contact.relationship}
                            onChange={(e) => updateEmergencyContact(contact.id, "relationship", e.target.value)}
                            placeholder="Relationship"
                            className="flex-1"
                          />
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => removeEmergencyContact(contact.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="hero">
                  <Save className="h-4 w-4 mr-2" />
                  Save Emergency Contacts
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Watch className="h-5 w-5 text-primary" />
                      <span>Connected Devices</span>
                    </CardTitle>
                    <CardDescription>
                      Manage your wearable devices and health data connections.
                    </CardDescription>
                  </div>
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Device
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {connectedDevices.map((device) => (
                  <div key={device.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{device.icon}</div>
                      <div>
                        <h4 className="font-medium text-foreground">{device.name}</h4>
                        <p className="text-sm text-muted-foreground">{device.type}</p>
                        <p className="text-xs text-muted-foreground">
                          Last sync: {device.lastSync}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        variant="secondary" 
                        className="bg-green-100 text-green-700"
                      >
                        {device.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Settings className="h-3 w-3 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Add new device options */}
                <div className="border-t border-border pt-4 mt-6">
                  <h4 className="font-medium text-foreground mb-4">Connect New Device</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="vitals" className="h-20 flex-col space-y-2">
                      <span className="text-2xl">🔗</span>
                      <span className="text-sm font-medium">Google Fit</span>
                    </Button>
                    <Button variant="vitals" className="h-20 flex-col space-y-2">
                      <span className="text-2xl">⌚</span>
                      <span className="text-sm font-medium">Fitbit</span>
                    </Button>
                    <Button variant="vitals" className="h-20 flex-col space-y-2">
                      <span className="text-2xl">⌚</span>
                      <span className="text-sm font-medium">Apple Health</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Privacy & Security</span>
                </CardTitle>
                <CardDescription>
                  Control your privacy settings and data sharing preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Data Sharing with Family</h4>
                      <p className="text-sm text-muted-foreground">
                        Allow family members to view your health summaries
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Enabled
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Emergency Alerts</h4>
                      <p className="text-sm text-muted-foreground">
                        Send automatic alerts to emergency contacts during critical events
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Enabled
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">AI Report Generation</h4>
                      <p className="text-sm text-muted-foreground">
                        Generate weekly AI reports based on your health data
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Enabled
                    </Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button variant="outline" className="w-full">
                    Download All Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};