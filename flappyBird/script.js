document.addEventListener('keypress', handleStart, {once:true})

const title = document.querySelector('[data-title]')

let lastTime //last time we updated
function updateLoop(time){
    if(lastTime == null){//skips very first loop to get rid of null value 
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return//every time time - lastime occurs we will get a small number
    }
const delta = time - lastTime//time between each animation frame
lastTime = time //tracks time between each call
window.requestAnimationFrame(updateLoop)
}

function handleStart(){ //starts game 
title.classList.add('hide')
window.requestAnimationFrame(updateLoop)
}

function handleLose(){ //stops game 

}