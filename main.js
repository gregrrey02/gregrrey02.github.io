function nameButton(){
   var your_name = prompt("Please enter your name:");
   var text
   if (your_name == null || your_name == ""){
    text = "User cancelled the prompt";}
    else {
        text = "Hello " + your_name + ", welcome!";
    }
   document.getElementById("b_output").innerHTML = text; 
}

function imgButton(){
    var img = document.getElementById("img1");
    img.style.transform="scale(1.5) translate(30%,20%)";
    img.style.transition="transform 0.2s ease";
}
function reset(){
    var img = document.getElementById("img1");
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.2s ease";
}
