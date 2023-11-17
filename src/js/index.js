import '../scss/style.scss'

import swiper from './swiper'

// Показ-скрытие меню
let btnBurgerMenuShow = document.querySelector('.header__burger')
let btnBurgerMenuHide = document.querySelector('.side-menu__close')
let sideMenu = document.querySelector('.side-menu')
let menuOverlay = document.querySelector('.menu-overlay')
let page = document.querySelector('.page')

btnBurgerMenuShow.addEventListener('click', function () {
  sideMenu.classList.add('side-menu--show')
  menuOverlay.classList.add('menu-overlay--show')
  page.classList.add('overflowHidden')
})

btnBurgerMenuHide.addEventListener('click', function () {
  sideMenu.classList.remove('side-menu--show')
  menuOverlay.classList.remove('menu-overlay--show')
  page.classList.remove('overflowHidden')
})

// Функционал кнопки Показать все - Скрыть все
import { clickToShowBrands, clickToShowEquip, showHideElBrands, showHideElEquip } from './btnShowHide'
clickToShowBrands.addEventListener('click', showHideElBrands)
clickToShowEquip.addEventListener('click', showHideElEquip)
