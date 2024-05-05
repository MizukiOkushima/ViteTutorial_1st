import './style.scss'
import './test.scss'

// Splide
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';
import '@splidejs/splide/css/core';

// オプション：ループ type: 'loop'
new Splide('.splide', {
  type: 'loop',
}).mount();