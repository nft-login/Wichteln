import Dashboard from "../components/Dashboard.vue";

export default {
  title: "Dashboard",
  component: Dashboard,
  argTypes: {
    api: { type: "string" },
  },
};

const Template = (args) => ({
  components: { Dashboard },
  setup() {
    return { args };
  },
  template: '<Suspense><template #default><dashboard v-bind="args" /></template><template #fallback><div style="text-align: center; padding-top: 20px">Loading</div></template></Suspense>',
});

export const Primary = Template.bind({});
Primary.args = {
  api: "http://localhost:8000/",
};
