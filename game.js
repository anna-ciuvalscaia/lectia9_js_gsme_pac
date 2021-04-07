
let pac_x  = parseInt(1 + Math.random() * 9)
let pac_y  = parseInt(1 + Math.random() * 9)

let coin_x = parseInt(1 + Math.random() * 9)
let coin_y = parseInt(1 + Math.random() * 9)

let bomb_x = parseInt(1 + Math.random() * 9)
let bomb_y = parseInt(1 + Math.random() * 9)

let score  = 0
let heart  = 100


function action(){
 console.log(event.key)
 switch (event.key){
     case "ArrowUp":    if (pac_y <= 1){return} else {pac_y--} ;  break
     case "ArrowDown":  if (pac_y >= 10){return} else {pac_y++};  break
     case "ArrowRight": if (pac_x >= 10){pac_x = 1} else {pac_x++} ;  break
     case "ArrowLeft":  if (pac_x <= 1){pac_x = 10} else {pac_x--};  break
 }

 
   if (pac_x == coin_x & pac_y == coin_y) {
    if( heart <= 1) { 
      alert(`GAME OVER
      Score:  ${score} `) 
      return
     }
     score += 10
     gameMap.innerHTML += 
     coin_x = parseInt(1 + Math.random() * 9) ; coin_y = parseInt(1 + Math.random() * 9)
    } 
  
if (pac_x == bomb_x & pac_y == bomb_y) {
    
       if( heart <= 1) { 
       alert(`GAME OVER
            Score:  ${score} `) 
       return
      }
      heart -= 20
      gameMap.innerHTML += 
      bomb_x = parseInt(1 + Math.random() * 9) ; bomb_y = parseInt(1 + Math.random() * 9)
    }
   
   renderMap()
}



function renderMap() {
    gameMap.innerHTML = ``
  for (let y = 1; y <= 10; y++){   
    for(let x = 1; x <=  10; x++) {

     if( x == pac_x && y == pac_y) {
        gameMap.innerHTML += 
        `<div class="pac"></div>`  
     } else if( x == coin_x && y == coin_y ) {
          gameMap.innerHTML += 
      `<div class="coin"></div>` 
     } else if( x == bomb_x && y == bomb_y ) {
      gameMap.innerHTML += 
      `<div class="bomb"></div>` 
     }
     else {
         gameMap.innerHTML += 
    `<div class=""></div>` 
     }

    }
  }
  
  gameScore.innerHTML = `
  Score: ${score} <br>
  <img src="icon/Heart-icon.png"> ${heart}
  `
  
}

renderMap()