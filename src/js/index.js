import '../scss/style.scss'

import swiper from './swiper'

import { clickToShowBrands, clickToShowEquip, showHideElBrands, showHideElEquip } from './btnShowHide'
clickToShowBrands.addEventListener('click', showHideElBrands)
clickToShowEquip.addEventListener('click', showHideElEquip)
