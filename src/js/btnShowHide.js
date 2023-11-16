export let clickToShowBrands = document.querySelector('.show-brands')
export let clickToShowEquip = document.querySelector('.show-equip')

export function showHideElBrands() {
  let swiperSlideHiddenBrands = document.querySelectorAll('.hiddenElBrand')

  swiperSlideHiddenBrands.forEach((item, i) => {
    swiperSlideHiddenBrands[i].classList.toggle('hide-slide')
  })

  if (!swiperSlideHiddenBrands[0].classList.contains('hide-slide')) {
    clickToShowBrands.classList.add('hide-carts')
  } else {
    clickToShowBrands.classList.remove('hide-carts')
  }
}

export function showHideElEquip() {
  let swiperSlideHiddenEquip = document.querySelectorAll('.hiddenElEquip')

  swiperSlideHiddenEquip.forEach((item, i) => {
    swiperSlideHiddenEquip[i].classList.toggle('hide-slide')
  })

  if (!swiperSlideHiddenEquip[0].classList.contains('hide-slide')) {
    clickToShowEquip.classList.add('hide-carts')
  } else {
    clickToShowEquip.classList.remove('hide-carts')
  }
}
