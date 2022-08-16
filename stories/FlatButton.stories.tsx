import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FlatButton, FlatButtonProps } from '../src';

const meta: Meta = {
  title: 'Input/Flat Button',
  component: FlatButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['#f45', 'green', 'blue'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Template: Story<FlatButtonProps> = args => (
  <FlatButton {...args} />
);

// export const Default = Template.bind({});
