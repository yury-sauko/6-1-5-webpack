import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
// import 'swiper/swiper.css'
// import 'swiper/css/pagination.css'

export const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.2,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  breakpoints: {
    768: {
      enabled: false,
      slidesPerView: 'auto'
    }
  }
})
