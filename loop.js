
var a = 0;
var id = setInterval(anim,100);

   
function anim(){  
 a = a + 10;  
 if(a == 200){
    clearInterval(id);
 }else{
    var target = document.getElementById('hello');
    target.style.width = a + 'px';
}
   
    
}

    
