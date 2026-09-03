import { Badge as MantineBadge, type BadgeProps as MantineBadgeProps } from '@mantine/core';
import type { ReactNode } from 'react';

export type BadgeIntent =
  | 'brand'
  | 'accent'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'neutral';

export interface BadgeProps extends MantineBadgeProps {
  intent?: BadgeIntent;
  children: ReactNode;
}

const intentColor: Record<BadgeIntent, string> = {
  brand: 'violet',
  accent: 'grape',
  success: 'green',
  error: 'red',
  warning: 'yellow',
  info: 'blue',
  neutral: 'gray',
};

export function Badge({ intent = 'neutral', children, ...props }: BadgeProps) {
  return (
    <MantineBadge color={intentColor[intent]} {...props}>
      {children}
    </MantineBadge>
  );
}
