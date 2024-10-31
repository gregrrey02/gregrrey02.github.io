
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

var submitButton = document.getElementById('submit')
submitButton.onclick = saveData;

function saveData(){
  var input = document.getElementById("myform");
  localStorage.setItem("myform", input.value);
}
