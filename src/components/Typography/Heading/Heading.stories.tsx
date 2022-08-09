import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading, HeadingColor, HeadingSize, HeadingWeight } from "./Heading";

export default {
    title: 'typography/Heading',
    component: Heading,
    argTypes: {

        size: {
            options: [HeadingSize.Large, HeadingSize.Medium, HeadingSize.Small],
            control: {type: 'select'},
        },
        weight: {
            options: [HeadingWeight.Light, HeadingWeight.Medium],
            control: {type: 'select'},
        },
        color: {
            options: [HeadingColor.Primary, HeadingColor.Secondary],
            control: {type: 'select'},
        },
    }
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}>Heading</Heading>;

export const Primary = Template.bind({});
Primary.args = {
    size: HeadingSize.Medium,
    weight: HeadingWeight.Medium,
}