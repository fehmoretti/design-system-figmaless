import type { Preview } from '@storybook/react-vite';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { figmalessTheme } from '../src/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MantineProvider theme={figmalessTheme}>
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    a11y: { test: 'todo' },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Components'],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
