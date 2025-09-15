const count = document.querySelector("#count");
const text = document.querySelector("#text");

text.addEventListener("input", (event) => {
  //count.textContent = text.value.length;
  count.textContent = event.target.value.length;
});