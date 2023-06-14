import VueCounter from '../../src/components/VueCounter.vue';

export default {
  title: 'Vue',
  component: VueCounter,
};

export const Vue = {
  render: () => ({
    components: {
      VueCounter,
    },
    template: '<vue-counter>Vue Counter</vue-counter>',
  })
};

