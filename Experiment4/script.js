const count = document.querySelector("#count");
const text = document.querySelector("#text");

text.addEventListener("input", () => {
  //count.textContent = text.value.length;
  count.textContent = event.target.value.length;
});