import { createTheme, rem } from '@mantine/core';

export const figmalessTheme = createTheme({
  primaryColor: 'violet',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
  defaultRadius: 'md',
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },
  radius: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(24),
  },
  components: {
    Button: {
      defaultProps: { size: 'md' },
    },
    TextInput: {
      defaultProps: { size: 'md' },
    },
    Select: {
      defaultProps: { size: 'md' },
    },
  },
});
