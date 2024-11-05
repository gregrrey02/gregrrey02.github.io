
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
          age: document.getElementById("age").value,
          education: document.querySelector('input[name="education"]:checked').value,
          hiringWebsites: Array.from(document.querySelectorAll('input[name="hiringWebsites"]:checked')).map(el => el.value),
          experience: document.getElementById("experience").value,
          feedback: document.getElementById("feedback").value,
      };
      // stores survey answers into local storage
      localStorage.setItem("surveyFormData", JSON.stringify(formData));
      alert("Form data saved to local storage!");
  });
});
