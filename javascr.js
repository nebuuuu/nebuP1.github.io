var square = document.getElementById("sq");

var a = 0;
var b = 3;
var speed = 1;
var width =  window.innerWidth;
var height = window.innerHeight;



setInterval(move, 10);




function move()
{
   switch(true)
   {
    case a <= 95 && b <= 3:
        a += speed;
        break;  
    case a >= 95 && b <= 92:
        b += speed;
        break;
    case a >= 3 && b >= 92:
        a -= speed;
        break;
    case a <= 3 && b >= 3:
        b -= speed;
        break;
            
    



   }
  

    
   square.style.left = a + "%";
   square.style.top = b + "%";  
}









