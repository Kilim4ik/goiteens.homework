const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  //test
  //   console.log(document.querySelector("#a").value);
  console.log(1);
  localStorage.setItem(
    document.querySelector("#a").value,
    document.querySelector("#b").value
  );
});
