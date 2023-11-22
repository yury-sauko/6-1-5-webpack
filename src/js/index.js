import '../scss/style.scss'

import swiper from './swiper'

// Показ-скрытие меню
let btnBurgerMenuShow = document.querySelector('.header__burger')
let btnBurgerMenuHide = document.querySelector('.side-menu__close')
let sideMenu = document.querySelector('.side-menu')
let overlay = document.querySelector('.overlay')
let page = document.querySelector('.page')

btnBurgerMenuShow.addEventListener('click', function () {
  sideMenu.classList.add('side-menu--show')
  overlay.classList.add('overlay--show-with-menu')
  page.classList.add('overflowHidden')
})

btnBurgerMenuHide.addEventListener('click', function () {
  sideMenu.classList.remove('side-menu--show')
  overlay.classList.remove('overlay--show-with-menu')
  page.classList.remove('overflowHidden')
})

// Показ-скрытие модалок
let showModalCall = document.querySelectorAll('.showModalCall')
let showModalFeedback = document.querySelectorAll('.showModalFeedback')
let closeModal = document.querySelectorAll('.modal__close')
let modalCall = document.querySelector('[name="modalCall"]')
let modalFeedback = document.querySelector('[name="modalFeedback"]')

showModalCall.forEach((item, i) => {
  showModalCall[i].addEventListener('click', function () {
    modalCall.classList.add('modal--show')
    overlay.classList.add('overlay--show-with-modal')
    page.classList.add('overflowHidden')
  })
})

showModalFeedback.forEach((item, i) => {
  showModalFeedback[i].addEventListener('click', function () {
    modalFeedback.classList.add('modal--show')
    overlay.classList.add('overlay--show-with-modal')
    page.classList.add('overflowHidden')
  })
})

closeModal.forEach((item, i) => {
  closeModal[i].addEventListener('click', function () {
    if (sideMenu.classList.contains('side-menu--show')) {
      modalCall.classList.remove('modal--show')
      modalFeedback.classList.remove('modal--show')
      overlay.classList.remove('overlay--show-with-modal')
    } else {
      modalCall.classList.remove('modal--show')
      modalFeedback.classList.remove('modal--show')
      overlay.classList.remove('overlay--show-with-modal')
      page.classList.remove('overflowHidden')
    }
  })
})

// Клик по оверлэю
overlay.addEventListener('click', function () {
  sideMenu.classList.remove('side-menu--show')
  modalCall.classList.remove('modal--show')
  modalFeedback.classList.remove('modal--show')
  overlay.classList.remove('overlay--show-with-menu', 'overlay--show-with-modal')
  page.classList.remove('overflowHidden')
})

// Функционал кнопки Показать все - Скрыть все
import { clickToShowBrands, clickToShowEquip, showHideElBrands, showHideElEquip } from './btnShowHide'
clickToShowBrands.addEventListener('click', showHideElBrands)
clickToShowEquip.addEventListener('click', showHideElEquip)
