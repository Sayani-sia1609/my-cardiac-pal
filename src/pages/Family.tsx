import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  UserPlus, 
  Search, 
  AlertTriangle, 
  Heart,
  CheckCircle,
  Clock,
  Mail,
  Phone
} from "lucide-react";

export const Family = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock family data
  const familyMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      relationship: "Spouse",
      status: "normal",
      lastUpdate: "2 hours ago",
      vitals: { heartRate: 68, bp: "118/76", stress: "Low" },
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Johnson",
      email: "michael.j@email.com", 
      relationship: "Son",
      status: "warning",
      lastUpdate: "30 min ago",
      vitals: { heartRate: 85, bp: "130/82", stress: "Medium" },
      avatar: "MJ"
    },
    {
      id: 3,
      name: "Emma Johnson",
      email: "emma.j@email.com",
      relationship: "Daughter", 
      status: "normal",
      lastUpdate: "1 hour ago",
      vitals: { heartRate: 72, bp: "115/70", stress: "Low" },
      avatar: "EJ"
    }
  ];

  const recentAlerts = [
    {
      member: "Michael Johnson",
      message: "Elevated blood pressure detected",
      time: "30 min ago",
      type: "warning"
    },
    {
      member: "Sarah Johnson", 
      message: "Daily check-in completed",
      time: "2 hours ago",
      type: "success"
    },
    {
      member: "Emma Johnson",
      message: "Exercise goal achieved", 
      time: "3 hours ago",
      type: "success"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-accent';
      case 'warning': return 'text-amber-500';
      case 'critical': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'normal': return <Badge variant="secondary" className="bg-accent/10 text-accent">Normal</Badge>;
      case 'warning': return <Badge variant="secondary" className="bg-amber-100 text-amber-700">Warning</Badge>;
      case 'critical': return <Badge variant="destructive">Critical</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
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
              Family Health Monitor
            </h1>
            <p className="text-muted-foreground">
              Keep track of your family's health and receive important alerts.
            </p>
          </div>
          <Button variant="hero">
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Family Member
          </Button>
        </div>

        <Tabs defaultValue="members" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="members">Family Members</TabsTrigger>
            <TabsTrigger value="alerts">Recent Alerts</TabsTrigger>
            <TabsTrigger value="requests">Pending Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="members" className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search family members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Family Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {familyMembers.map((member) => (
                <Card key={member.id} className="glass hover:shadow-medium transition-smooth">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                          {member.avatar}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <CardDescription>{member.relationship}</CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(member.status)}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Vitals Summary */}
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center p-2 bg-muted/30 rounded">
                        <div className="font-semibold text-vitals-heart-rate">
                          {member.vitals.heartRate}
                        </div>
                        <div className="text-xs text-muted-foreground">BPM</div>
                      </div>
                      <div className="text-center p-2 bg-muted/30 rounded">
                        <div className="font-semibold text-vitals-bp-normal">
                          {member.vitals.bp}
                        </div>
                        <div className="text-xs text-muted-foreground">BP</div>
                      </div>
                      <div className="text-center p-2 bg-muted/30 rounded">
                        <div className="font-semibold text-vitals-stress-low">
                          {member.vitals.stress}
                        </div>
                        <div className="text-xs text-muted-foreground">Stress</div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Mail className="h-3 w-3 mr-2" />
                        {member.email}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-3 w-3 mr-2" />
                        Last update: {member.lastUpdate}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <span>Recent Family Alerts</span>
                </CardTitle>
                <CardDescription>
                  Latest health alerts from your family members
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === 'success' ? 'bg-accent' :
                      alert.type === 'warning' ? 'bg-amber-500' :
                      'bg-secondary'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground">{alert.member}</p>
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {alert.message}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Pending Requests</span>
                </CardTitle>
                <CardDescription>
                  Manage incoming and outgoing family connection requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No pending requests</p>
                  <Button variant="outline" className="mt-4">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Invite Family Member
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