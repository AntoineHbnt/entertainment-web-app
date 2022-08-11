import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MediaDescription } from "./MediaDescription";

export default {
    title: "atoms/MediaDescription",
    component: MediaDescription,
    argTypes: {
        media: {
            defaultValue: {
                title: "The Shawshank Redemption",
                year: "1994",
                category: "TV Series",
                rating: "PG",
            }
        }
    }

} as ComponentMeta<typeof MediaDescription>;

const Template: ComponentStory<typeof MediaDescription> = (args) => (
    <MediaDescription {...args}/>
);

export const Primary = Template.bind({});
Primary.args = {}
