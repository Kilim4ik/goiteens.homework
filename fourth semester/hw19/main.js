const baseURL =
  "https://pixabay.com/api/?per_page=12&key=47618841-cf05a216298b2d642f212bb8d";
const list = document.querySelector(".gallery");
const searchInput = document.querySelector("input");
let page = 1;
searchInput.addEventListener("input", async (e) => {
  if (e.target.value === "") list.innerHTML = "";
  else {
    renderData(await fetchData(page, e.target.value));
  }
});

const fetchData = (page, value) =>
  fetch(`${baseURL}&page=${page}&q=${value}`).then((res) => res.json());

const renderData = (data) => {
  const arr = data.hits;
  console.log(data);
  console.log(arr);
  list.innerHTML =
    arr.reduce(
      (acc, elem) =>
        (acc += `
      <li>
  <div class="photo-card">
  <img src="${elem.webformatURL}" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${elem.likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${elem.views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${elem.comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${elem.downloads}
    </p>
  </div>
</div>
</li>
  `),
      ``
    ) + "<button id='load-more' data-action='loadMore'>load more</button>";
};
const updateRender = (data) => {
  const arr = data.hits;

  document.querySelector(".gallery").insertAdjacentHTML(
    "beforeend",

    arr.reduce(
      (acc, elem) =>
        (acc += `
      <li>
  <div class="photo-card">
  <img src="${elem.webformatURL}" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${elem.likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${elem.views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${elem.comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${elem.downloads}
    </p>
  </div>
</div>
</li>
  `),
      ``
    )
  );
};

list.addEventListener("click", async (e) => {
  if (e.target.id === "load-more") {
    page++;
    const currentScroll = window.scrollY;
    // const arr = ;
    updateRender(await fetchData(page, searchInput.value));
    window.scrollTo(0, currentScroll);
    // setBooks(page);
  }
});
