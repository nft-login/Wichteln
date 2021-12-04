import TokenMedia from "../components/TokenMedia.vue";
import { toSvg } from "jdenticon";

export default {
  title: "TokenMedia",
  component: TokenMedia,
  argTypes: {
    url: { type: "string" },
    flipUrl: { type: "string" },
  },
};

const Template = (args) => ({
  components: { TokenMedia },
  setup() {
    return { args };
  },
  template: '<token-media v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
  flipUrl: "https://upload.wikimedia.org/wikipedia/commons/archive/7/70/20120323050936%21Example.png",
};

export const JDenticon = Template.bind({});
const svgString = toSvg(`data`, 100);
const svgString2 = toSvg(`data2`, 100);
JDenticon.args = {
  url: svgString,
  flipUrl: svgString2,
};
