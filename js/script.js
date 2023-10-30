// const hamburgerbutton = document.querySelector(".hamburger_button");
// const mobileNav = document.querySelector(".nav-mobile");

// hamburgerbutton.addEventListener("click", () => {
//   mobileNav.classList.toggle("display-none");
//   // alert("holy moley it is working");
// });



// document.addEventListener("DOMContentLoaded", function () {
//   const showFormButton = document.getElementById("showFormButton");
//   const myForm = document.getElementById("myForm");

//   showFormButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the default link behavior

//     if (myForm.style.display === "none") {
//       myForm.style.display = "block";
//     } else {
//       myForm.style.display = "none";
//     }
//   });
// });

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();




