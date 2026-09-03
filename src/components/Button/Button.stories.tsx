import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Executa uma ação imediata. Use apenas uma ação primária por região.',
      },
    },
  },
  args: {
    children: 'Salvar alterações',
    intent: 'brand',
    variant: 'filled',
    size: 'md',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['brand', 'accent', 'tertiary', 'success', 'error', 'warning', 'info', 'default'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline', 'subtle', 'transparent'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Destructive: Story = {
  args: { children: 'Excluir item', intent: 'error' },
};
