import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  args: {
    children: 'Em revisão',
    intent: 'info',
    variant: 'light',
    size: 'md',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['brand', 'accent', 'success', 'error', 'warning', 'info', 'neutral'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline', 'dot', 'transparent', 'white', 'default'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Success: Story = { args: { children: 'Ativo', intent: 'success' } };
export const Error: Story = { args: { children: 'Bloqueado', intent: 'error' } };
