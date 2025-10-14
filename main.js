const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");
const dropdowns = document.querySelectorAll(".dropdown");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

dropdowns.forEach(drop => {
  const button = drop.querySelector(".dropbtn");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    drop.classList.toggle("active");
  });
});
