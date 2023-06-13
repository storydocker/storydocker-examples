import './astro.css';

// adding `?raw` allows importing HTML as a string
import astroPage from '../../dist/index.html?raw';


export default {
  title: 'Astro',
  render: () => {
    return astroPage;
  },
};

export const Astro = {};

