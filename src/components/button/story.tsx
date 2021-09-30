import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@components/button/component';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button />;

export const Default = Template.bind({});
Default.args = {};
