/* Elnei Zapata*/

/*Global Variables*/

var interValid = 0;
let change = 50;


function StartMoving()
{
    var down = 1;
    var image = document.getElementById("grillhot");
    interValid = setInterval(function() {
     image.style.left = change + "px";
        image.style.top = change + "px";
        document.getElementById("msg").innerHTML = "Jump " + image.style.left + " Jump = " + image.style.top;
    change += 4;
    
    },200);
}
function StopMoving()
{
    function interValid()
    {clearInterval(interValid)}
}
