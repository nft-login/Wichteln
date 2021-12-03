import FileUpload from "../components/FileUpload.vue";

export default {
  title: "FileUpload",
  component: FileUpload,
  argTypes: {
    tokenId: { type: "number" },
  },
};

const Template = (args) => ({
  components: { FileUpload },
  setup() {
    return { args };
  },
  template: '<file-upload v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  tokenId: 0,
};
