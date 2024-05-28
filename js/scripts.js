//footer email btn
const fEmailBtn = document.getElementById("emailBtnFooter");

fEmailBtn.addEventListener("click", () => {
  const emailLink = `mailto:edwardchirwa07@gmail.com`;

  //redirect user to the mailto link
  window.location.href = emailLink;
});
