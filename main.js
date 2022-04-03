"use strict"

const shareIcon =document.querySelector (".js-share-icon")

const tooltip =document.querySelector (".js-tooltip")

//evento

shareIcon.addEventListener ("click",()=> {
tooltip.classList.toggle ("active")
}
) 

