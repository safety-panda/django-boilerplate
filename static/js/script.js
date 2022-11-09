const greyBtn = document.getElementById("greyBtn");
const pinkBtn = document.getElementById("pinkBtn");

greyBtn.addEventListener("click", function onClick(event) {
  document.body.style.backgroundColor = "#C6D8D5";
});

pinkBtn.addEventListener("click", function onClick(event) {
  document.body.style.backgroundColor = "#F9C7E4";
});

setupCounter(document.querySelector("#counter"));
