let c = 1;
let firstSort = true;
document.querySelector("div.sort").addEventListener("click", (e) => {
  let arrow = document.querySelector("polygon.arrow");
  let direction = "asc";
  if (arrow.classList.contains("asc")) {
    if (firstSort) {
      firstSort = !firstSort;
    } else {
      arrow.classList.remove("asc");
      arrow.classList.add("desc");
      direction = "desc";
    }
  } else if (arrow.classList.contains("desc")) {
    arrow.classList.remove("desc");
    arrow.classList.add("asc");
  }
  let order = [...document.querySelectorAll(".item")]
    .sort((a, b) => {
      if (direction === "asc") {
        return (
          a
            .querySelector("p")
            .textContent.localeCompare(b.querySelector("p").textContent) ||
          a.id.localeCompare(b.id)
        );
      } else {
        return (
          b
            .querySelector("p")
            .textContent.localeCompare(a.querySelector("p").textContent) ||
          b.id.localeCompare(a.id)
        );
      }
    })
    .map((el) => el.id);
  for (let i = order.length - 1; i > 0; i--) {
    let currentId = order[i];
    let prevId = order[i - 1];
    let currentNode = document.querySelector(`.list-item#${currentId}`);
    let prevNode = document.querySelector(`.list-item#${prevId}`);
    currentNode.parentNode.insertBefore(prevNode, currentNode);
  }
});

document.querySelector("#add").addEventListener("click", (e) => {
  let lastChild = document.querySelector(
    "div.box > div.flex-item.wrapper > div:last-child"
  );
  let parent = lastChild.parentNode;
  let clone = lastChild.cloneNode(true);
  if (parent.children.length <= 6) {
    clone.querySelector(".remove").addEventListener("click", removeListener);
    clone.classList.remove("hidden");
    clone.querySelector("p").textContent =
      parent.children[0].querySelector("p").textContent;
    parent.children[0].querySelector("p").textContent = "";
    lastChild.parentNode.insertBefore(clone, lastChild);
    clone.id = "item" + c;
    clone.classList.add("item");
    if (parent.children[0].classList.contains("item")) {
      parent.children[0].classList.remove("item");
    }
    c++;
  }
  if (parent.children.length === 7) {
    parent.children[0].classList.add("hidden");
  }
});

document.querySelector("#item0").addEventListener("input", (e) => {
  document.querySelector("#item0").classList.add("item");
});

document.querySelector("#item0 > div").addEventListener("click", () => {
  document.querySelector("#item0 > p").textContent = "";
});

document
  .querySelector("div.box > div.flex-item.wrapper > div:last-child > div")
  .addEventListener("click", removeListener);

function removeListener(e) {
  let target = e.target;
  if (target.parentNode.parentNode.children.length === 7) {
    target.parentNode.parentNode.children[0].classList.remove("hidden");
  }
  target.parentNode.parentNode.removeChild(target.parentNode);
}
