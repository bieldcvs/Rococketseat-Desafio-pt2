import { handlePlay,handlePause,handleAdd,handleRemove } from "./event-timer.js";
import { handleCafeteira, handleChuva, handleNature, handlelareira } from "./event-button.js";

let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let add = document.querySelector('.add')
let remove = document.querySelector('.remove')

play.addEventListener('click',handlePlay)
pause.addEventListener('click',handlePause)
add.addEventListener('click',handleAdd)
remove.addEventListener('click',handleRemove)

let nature = document.querySelector('.nature')
let chuva = document.querySelector('.chuva')
let cafeteira = document.querySelector('.cafeteira')
let lareira = document.querySelector('.lareira')

nature.addEventListener('click',handleNature)
chuva.addEventListener('click',handleChuva)
cafeteira.addEventListener('click',handleCafeteira)
lareira.addEventListener('click', handlelareira )

