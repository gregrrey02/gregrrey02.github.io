// variable declarations for song player
let audio = document.getElementById('songPlayer');
let playButton = document.getElementById('playButton');
let pauseButton = document.getElementById('pauseButton');
let seekSlider = document.getElementById('seekSlider');
let volumeUpButton = document.getElementById('volumeUp');
let volumeDownButton = document.getElementById('volumeDown');
// event listener for play button
playButton.addEventListener('click',()=>{
  audio.play();
});
// event listener for pause button
pauseButton.addEventListener('click',()=>{
  audio.pause();
});
// update slider position as audio plays
audio.addEventListener('timeupdate', () => {
  seekSlider.value = (audio.currentTime/audio.duration)*100;
});
// seek controls
seekSlider.addEventListener('input', () => {
  audio.currentTime = (seekSlider.value/100)*audio.duration;
});
// volume controls
volumeUpButton.addEventListener('click', ()=>{
  if (audio.volume<1) {
    audio.volume = Math.min(1,audio.volume+0.1);
  }
});
volumeDownButton.addEventListener('click',()=>{
  if (audio.volume > 0) {
    audio.volume = Math.max(0,audio.volume-0.1);
  }
});

// variable declarations for enlarge text button
let enlargeButton = document.getElementById('enlargeText');
let isLarge = false; // variable to identify if the button is active
let defaultSize = 18;
let enlarged = 26;
// event listener for the button
enlargeButton.addEventListener('click',()=>{
  if (isLarge) { // if the button is not clicked yet
    document.body.style.fontSize = defaultSize+'px';
    enlargeButton.textContent ='Enlarge text';
  } else { // if the button is clicked
    document.body.style.fontSize = enlarged+'px';
    enlargeButton.textContent='Reset';
  }
  isLarge = !isLarge // for the reset button to function
});

//variable declarations for background and text color button
let changeButton = document.getElementById('changeColour');
let isChanged = false; // variable to identify if the button is active
let defaultColour = '#8f8f8f';
let newColour = '#ffffff'

// event listener for the button
changeButton.addEventListener('click',()=>{
  if (isChanged) {
    document.body.style.backgroundColor = defaultColour; // if the button is not clicked yet
    changeButton.textContent = 'Change background colour';
  } else {
    document.body.style.backgroundColor = newColour; // if the button is clicked
    changeButton.textContent = 'Reset';
  }
    isChanged = !isChanged // for the reset button to function
});

// function for onclick buttons for alt text of images
function showAlt(button) {
  // variable to access the figure alt text
  let img = button.previousElementSibling.previousElementSibling
  let altText = img.alt
  // shows the alt text in an alert
  alert(altText);
}
