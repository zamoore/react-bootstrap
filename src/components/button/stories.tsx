import { Story, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps, ButtonType } from '@components/button/component';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonType: {
      description: 'The type of button to render',
      control: {
        type: 'select',
        options: [ButtonType.Default, ButtonType.Primary, ButtonType.Danger],
      },
      type: {
        required: false,
      },
      table: {
        type: {
          summary: [ButtonType.Default, ButtonType.Primary, ButtonType.Danger],
        },
        defaultValue: { summary: ButtonType.Default },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = { buttonType: ButtonType.Primary };

export const Danger = Template.bind({});
Danger.args = { buttonType: ButtonType.Danger };
