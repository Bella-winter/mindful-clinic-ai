
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Shield } from 'lucide-react';

interface ProfileCardProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
}

export function ProfileCard({ user }: ProfileCardProps) {
  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin':
        return 'destructive';
      case 'doctor':
      case 'provider':
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2">
          <User className="w-5 h-5 text-medical-blue" />
          <span>Profile Information</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">{user.email}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Shield className="w-4 h-4 text-muted-foreground" />
          <Badge variant={getRoleBadgeVariant(user.role)} className="capitalize">
            {user.role}
          </Badge>
        </div>
        <div className="pt-2 border-t">
          <p className="text-sm text-muted-foreground">
            Welcome to CareConnect, {user.name}! Your account is verified and ready to use.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
