//footer email btn
const fEmailBtn = document.getElementById("emailBtnFooter");

// on button click
fEmailBtn.addEventListener("click", () => {
  const link = "mailto:edwarchirwa07@gmail.com";

  // open the gmail app
  window.location.href = link;
});
