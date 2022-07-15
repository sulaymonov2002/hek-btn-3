let allBtn = document.querySelectorAll("#btn");
let text = document.querySelector("#text");

function renderHexes() {
  let temp = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += temp[Math.floor(Math.random() * 16)];
  }
  return color;
}

allBtn.forEach((index) => {
  let color = renderHexes();
  index.style.backgroundColor = color;
  index.innerHTML = color;
  index.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
    text.innerHTML = color;
  });
});

module.exports = { renderHexes };
