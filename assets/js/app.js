document.querySelector("div.sort").addEventListener("click", () => {
  let arrow = document.querySelector("polygon.arrow");
  if (arrow.classList.contains("asc")) {
    arrow.classList.remove("asc");
    arrow.classList.add("desc");
  } else if (arrow.classList.contains("desc")) {
    arrow.classList.remove("desc");
    arrow.classList.add("asc");
  }
});
