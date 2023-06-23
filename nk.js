// const info = document.querySelector(`$#info`);

// function btn1(){
//     info.style.display = "block";
// }
// function btn2(){
//     info.style.display = "none";
// }




function toggleHide(){
    let btn  = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display != 'none'){
    para.style.display = 'none';
   }
   else{
       para.style.toggleHide = 'block';
   }
}