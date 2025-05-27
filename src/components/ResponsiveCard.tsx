
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ResponsiveCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  compact?: boolean;
}

export function ResponsiveCard({ 
  title, 
  description, 
  children, 
  footer, 
  className = '',
  compact = false 
}: ResponsiveCardProps) {
  return (
    <Card className={cn(
      'h-full transition-all duration-200 hover:shadow-lg',
      'w-full',
      compact ? 'p-3 sm:p-4' : 'p-4 sm:p-6',
      className
    )}>
      {(title || description) && (
        <CardHeader className={compact ? 'pb-3' : 'pb-4'}>
          {title && (
            <CardTitle className={cn(
              'text-base sm:text-lg md:text-xl',
              compact && 'text-sm sm:text-base'
            )}>
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription className={cn(
              'text-sm sm:text-base',
              compact && 'text-xs sm:text-sm'
            )}>
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}
      <CardContent className={cn(
        compact ? 'py-2' : 'py-4',
        !title && !description && 'pt-0'
      )}>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className={compact ? 'pt-3' : 'pt-4'}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}
