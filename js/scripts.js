// javascript code

const emailBtn = document.querySelector(".email-btn");
//click event for the button

emailBtn.addEventListener("click", () =>{
    const emailLink = `mailto:edwardchirwa07@gmail.com`;

    //redirect user to the mailto link 

    window.location.href = emailLink;
})
