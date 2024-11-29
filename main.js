
document.addEventListener("DOMContentLoaded", function() {
  // get the id of the image
  const image = document.getElementById('enlargeImage');

  // click event listener for enlarging image
  image.addEventListener('click', () => {
      image.classList.toggle('enlarged');
  });
});

// form event listener for the buttons
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("surveyForm");

  form.addEventListener("submit", function (e) {
      e.preventDefault();
      // each item on the survey
      const formData = {
          name: document.getElementById("name").value,
          age: document.getElementById("phone").value,
          email: document.getElementById("email").value,
          education: document.querySelector('input[name="purpose"]:checked').value,
          message: document.getElementById("message").value,
      };
      // stores survey answers into local storage
      localStorage.setItem("surveyFormData", JSON.stringify(formData));
      alert("Sent, thank you!");
  });
});

document.getElementById("tmuClick").addEventListener("click", function() {
  // Display the alt text of the image
  alert("Alt text: " + this.alt);
});
