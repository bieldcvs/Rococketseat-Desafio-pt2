let audioNature = document.querySelector('.audio-nature')
let nature = document.querySelector('.nature')
let audioChuva = document.querySelector('.audio-chuva')
let chuva = document.querySelector('.chuva')
let audiolareira = document.querySelector('.audio-lareira')
let lareira = document.querySelector('.lareira')
let audioCafeteira = document.querySelector('.audio-cafeteira')
let cafeteira = document.querySelector('.cafeteira')

export function handleNature() {
  nature.classList.add('press')
  chuva.classList.remove('press')
  lareira.classList.remove('press')
  cafeteira.classList.remove('press')

  audioNature.play()
  audioChuva.pause()
  audiolareira.pause()
  audioCafeteira.pause()
  
}
export function handleChuva() {
  nature.classList.remove('press')
  chuva.classList.add('press')
  lareira.classList.remove('press')
  cafeteira.classList.remove('press')

  audioNature.pause()
  audioChuva.play()
  audiolareira.pause()
  audioCafeteira.pause()
}
export function handlelareira() {
  nature.classList.remove('press')
  chuva.classList.remove('press')
  lareira.classList.add('press')
  cafeteira.classList.remove('press')

  audioNature.pause()
  audioChuva.pause()
  audiolareira.play()
  audioCafeteira.pause()
}
export function handleCafeteira() {
  nature.classList.remove('press')
  chuva.classList.remove('press')
  lareira.classList.remove('press')
  cafeteira.classList.add('press')

  audioNature.pause()
  audioChuva.pause()
  audiolareira.pause()
  audioCafeteira.play()
}
