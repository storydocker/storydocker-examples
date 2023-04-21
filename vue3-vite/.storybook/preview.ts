import type { Preview } from "@storybook/vue3";


function interceptLinkClickEvent(e) {
  const { target } = e;
  if (target.tagName === 'A') {
    e.preventDefault();
  }
}

const preventerator = (story) => ({
  components: { story },
  setup: () => {
    // block click events
    window.addEventListener('click', interceptLinkClickEvent);
    window.addEventListener('click', interceptLinkClickEvent, { capture: true });
  },
  template: '<div><story /></div>',
});

const preview: Preview = {
  decorators: [preventerator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
