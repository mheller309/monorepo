import React from 'react';
import { Meta, Story } from '@storybook/react';
import Notification from '../src/components/Notification';

const meta: Meta = {
  title: 'Notification component',
  component: Notification,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Base: Story<React.ComponentProps<typeof Notification>> = (args) => (
  <Notification {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Base.bind({});

Default.args = {};
