import TokenPreview from "../components/TokenPreview.vue";

export default {
  title: "TokenPreview",
  component: TokenPreview,
  argTypes: {
    url: { type: "string" }
  },
};

const Template = (args) => ({
  components: { TokenPreview },
  setup() {
    return { args };
  },
  template: '<token-preview v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png"
};
