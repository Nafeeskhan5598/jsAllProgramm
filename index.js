//DOM Manipulation=======================

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);

// elemClass[0].style.background = "yello";
// document.getElementById('click').style.border = '2px solid red'
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementById('div')
console.log(tn)
tn[0].appendChild(createdElement);
createdElement2 = document.createdElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

//    events=====================================
  function clicked(){
    console.log('The button was clicked')
  }
function onload(){
    console.log('The document was loaded')
  }
  firstContainer.addEventListener('clicked', function(){
    console.log("click hua")
  })