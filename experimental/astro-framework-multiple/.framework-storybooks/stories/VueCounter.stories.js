import VueCounter from '../../src/components/VueCounter.vue';

export default {
  title: 'Vue',
  component: VueCounter,
};

export const Counter = {
  render: () => ({
    components: {
      VueCounter,
    },
    template: '<vue-counter>Vue Counter</vue-counter>',
  })
};

