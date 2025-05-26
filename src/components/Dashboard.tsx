
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Users, 
  Clock, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  Brain,
  Phone
} from 'lucide-react';

interface DashboardProps {
  user: { email: string; role: string; name: string };
}

export function Dashboard({ user }: DashboardProps) {
  const isProvider = user.role === 'provider' || user.role === 'admin';

  const upcomingAppointments = [
    { id: 1, patient: 'Sarah Johnson', time: '09:00 AM', type: 'Follow-up', priority: 'high' },
    { id: 2, patient: 'Mike Chen', time: '10:30 AM', type: 'Consultation', priority: 'medium' },
    { id: 3, patient: 'Emma Davis', time: '02:00 PM', type: 'Check-up', priority: 'low' }
  ];

  const recentReminders = [
    { id: 1, patient: 'Alice Brown', message: 'Medication reminder sent', status: 'delivered', time: '2 hours ago' },
    { id: 2, patient: 'John Wilson', message: 'Appointment confirmation', status: 'pending', time: '4 hours ago' },
    { id: 3, patient: 'Lisa Garcia', message: 'Follow-up care reminder', status: 'read', time: '6 hours ago' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-medical-blue to-medical-teal rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Welcome back, {user.name}
            </h2>
            <p className="opacity-90">
              {isProvider ? 'Managing patient care with intelligence' : 'Your health journey continues'}
            </p>
          </div>
          <div className="flex items-center space-x-2 opacity-80">
            <Brain className="w-8 h-8" />
            <span className="text-sm font-medium">AI Powered</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Appointments</p>
                <p className="text-2xl font-bold text-medical-blue">12</p>
              </div>
              <Calendar className="w-8 h-8 text-medical-blue" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Patients</p>
                <p className="text-2xl font-bold text-medical-green">248</p>
              </div>
              <Users className="w-8 h-8 text-medical-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Reminders Sent</p>
                <p className="text-2xl font-bold text-medical-purple">89</p>
              </div>
              <MessageSquare className="w-8 h-8 text-medical-purple" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Response Rate</p>
                <p className="text-2xl font-bold text-medical-teal">94%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-medical-teal" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-medical-blue" />
              <span>Upcoming Appointments</span>
            </CardTitle>
            <CardDescription>Your schedule for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {appointment.patient.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium">{appointment.patient}</p>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{appointment.time}</p>
                  <Badge 
                    variant={appointment.priority === 'high' ? 'destructive' : 
                            appointment.priority === 'medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {appointment.priority}
                  </Badge>
                </div>
              </div>
            ))}
            <Button className="w-full mt-4 bg-medical-blue hover:bg-medical-blue/90">
              View All Appointments
            </Button>
          </CardContent>
        </Card>

        {/* AI-Powered Reminders */}
        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-medical-purple" />
              <span>Smart Reminders</span>
            </CardTitle>
            <CardDescription>AI-generated patient communications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentReminders.map((reminder) => (
              <div 
                key={reminder.id}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    reminder.status === 'delivered' ? 'bg-medical-green' :
                    reminder.status === 'pending' ? 'bg-medical-orange' :
                    'bg-medical-blue'
                  }`} />
                  <div>
                    <p className="font-medium text-sm">{reminder.patient}</p>
                    <p className="text-xs text-muted-foreground">{reminder.message}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{reminder.time}</p>
                  <div className="flex items-center space-x-1">
                    {reminder.status === 'delivered' && <CheckCircle className="w-3 h-3 text-medical-green" />}
                    {reminder.status === 'pending' && <Clock className="w-3 h-3 text-medical-orange" />}
                    {reminder.status === 'read' && <MessageSquare className="w-3 h-3 text-medical-blue" />}
                  </div>
                </div>
              </div>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-medical-purple to-medical-blue hover:opacity-90">
              <Phone className="w-4 h-4 mr-2" />
              Send Smart Reminder
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Analytics */}
      <Card className="animate-slide-up">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-medical-green" />
            <span>Patient Engagement Analytics</span>
          </CardTitle>
          <CardDescription>Real-time insights into patient interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Appointment Adherence</span>
                <span className="font-medium">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Medication Compliance</span>
                <span className="font-medium">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Follow-up Response</span>
                <span className="font-medium">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
