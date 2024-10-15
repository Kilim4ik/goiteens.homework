const container = document.querySelector(".container");
let str = "";
const img = "https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif";
for (let i = 0; i < 100; i++) {
  str += `<div class=""><img data-src=${img}  alt="gif"></div>`;
}
// container.innerHTML = str;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((elem) => {
    const { isIntersecting, target } = elem;

    if (isIntersecting) {
      target.src = target.dataset.src;

      target.classList.add("visible");
      console.log(elem);
    } else target.classList.remove("visible");
  });
});
document.querySelectorAll("img").forEach((elem) => observer.observe(elem));
