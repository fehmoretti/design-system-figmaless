import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from '@mantine/core';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type ButtonIntent =
  | 'brand'
  | 'accent'
  | 'tertiary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'default';

export interface ButtonProps
  extends MantineButtonProps,
    Omit<ComponentPropsWithoutRef<'button'>, keyof MantineButtonProps> {
  intent?: ButtonIntent;
  children: ReactNode;
}

const intentColor: Record<ButtonIntent, string> = {
  brand: 'violet',
  accent: 'grape',
  tertiary: 'gray',
  success: 'green',
  error: 'red',
  warning: 'yellow',
  info: 'blue',
  default: 'dark',
};

export function Button({
  intent = 'brand',
  children,
  ...props
}: ButtonProps) {
  return (
    <MantineButton color={intentColor[intent]} {...props}>
      {children}
    </MantineButton>
  );
}
