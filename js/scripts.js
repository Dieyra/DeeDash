//footer email btn
const fEmailBtn = document.getElementById("emailBtnFooter");

// on button click
fEmailBtn.addEventListener("click", () => {
  const link = "mailto:edwarchirwa07@gmail.com";

  // open the gmail app
  window.location.href = link;
});

const hiBtn = document.getElementById("hiBtn");

// when the "click  here" button has been clicked
