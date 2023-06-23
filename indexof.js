function btn1() {
  let userValue = document.getElementById('fname').value
  document.getElementById('ol').innerHTML += `<li>${userValue} 
      <button type="button" onclick="del(event)">del</button></li>`
}
function btn2() {

  let userValue = document.getElementById("ol").innerHTML = " ";
}


function del(event) {
  event.currentTarget.parentNode.remove()
}


let demo = document.getElementById('').demo.style.texttransform = 'capitalize';
// let userValue = document.getElementById("delete").innerHTML = ` `
// function del2() {
//   let userValue = document.getElementById("delete2").innerHTML = ` `
// }
// function del3() {
//   document.getElementById("delete3").remove()
// }

