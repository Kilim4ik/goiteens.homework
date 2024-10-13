const btn = document.querySelector("#continue-button");
const greet = document.querySelector(".user-name");
btn.addEventListener("click", (e) => {
  console.log(1);
  localStorage.setItem(
    document.querySelector("#a").value,
    document.querySelector("#b").value
  );
  greet.textContent = ` Вітаємо , ${localStorage.getItem(
    document.querySelector("#a").value
  )}`;
});
