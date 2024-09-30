let start = document.querySelector(".control-buttons span")
let timer = document.querySelector(".timer")
let time = document.querySelector(".timer span")
start.onclick = function(){
  let yourName = prompt("what is your name ?")
  if(yourName == null || yourName == ""){
    document.querySelector(".name span").innerHTML = "undefined"
  }else{
    document.querySelector(".name span").innerHTML = yourName
  }
  document.getElementById("start").play()
  document.querySelector(".control-buttons").remove()
  gameover()
}

let durasion = 1000

let blocksContainer = document.querySelector(".memory-game-blocks")
let blocks = Array.from(blocksContainer.children)
let list = Array.from(Array(blocks.length).keys())

shafel(list)


blocks.forEach((el , index)=>{

el.style.order = list[index]

el.addEventListener("click" , function(){
  flipped(el)
})

})

function flipped(ele){
 
  ele.classList.add('is-flipped')
  let allflipped = blocks.filter((ele)=>ele.classList.contains('is-flipped'))
  if(allflipped.length == 2){
    stop(blocksContainer)
    rotate(allflipped[0] , allflipped[1])
  }
}
function stop(contianer){
  contianer.classList.add('no-clicking')
  setTimeout(()=>{
    contianer.classList.remove('no-clicking')
  },durasion)

}
function rotate(one , two){
    let negatav = document.querySelector(".tries span")
    if(one.dataset.technology == two.dataset.technology){
      one.classList.remove('is-flipped')
      two.classList.remove('is-flipped')
      one.classList.add('has-match')
      two.classList.add('has-match')
      document.getElementById("success").play()
    }else{
      negatav.innerHTML = parseInt(negatav.innerHTML) + 1
      setTimeout(()=>{
    one.classList.remove('is-flipped')
      two.classList.remove('is-flipped')
      },durasion)
          document.getElementById("fail").play()
    }

}


function shafel(array){
let current = array.length
  while(current > 0){
    let random = Math.floor(Math.random() * current)
     current--
     let temp = array[current]
     array[current] = array[random]
     array[random] = temp
  }
  return array
}


function gameover(){

  let s = setInterval(() => {
  time.textContent--
  if(timer.textContent == 0){
 
   window.alert("game over")

window.location.reload()


}
  let allmatch = blocks.filter((ele)=>ele.classList.contains('has-match'))
  console.log(allmatch)
if(allmatch.length == 20)
 clearInterval(s)

}, 1000);

}





