//footer email btn
const emailBtn = document.querySelector(".container-fluid .emailBtn");

// on button click
emailBtn.addEventListener("click", () => {
  const link = "mailto:edwarchirwa07@gmail.com";

  // open the gmail app
  window.location.href = link;
});
// when the "click  here" button has been clicked