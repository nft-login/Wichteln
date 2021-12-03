import TokenList from "../components/TokenList.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

export default {
  title: "TokenList",
  component: TokenList,
  argTypes: {
    tokens: { type: "Object" },
  },
};

const Template = (args) => ({
  components: { TokenList },
  setup() {
    return { args };
  },
  template: '<token-list v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  tokens: [
    {
      tokenId: 0,
      url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
    },
    {
      tokenId: 2,
      url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
    },
  ],
};
