



var input = document.getElementById("test");
input.addEventListener("keydown", function(e)
{
    if(e.key === "Enter")
    {
       document.getElementById("youtube").src = "https://www.youtube.com/embed/" + getId(e.target.value);
       document.getElementById("test").style.opacity = 0;
    }
    
});


function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;

     
    }







