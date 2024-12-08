"use strict";
import _ from "lodash";
// import { alert } from "@pnotify/core";
import fetchCountries from "./fetchCountries";
import { error } from "@pnotify/core";
const input = document.querySelector("input");
const container = document.querySelector(".country-container");
input.addEventListener(
  "input",
  _.debounce((e) => {
    fetchCountries(e.target.value)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (typeof data === Object) error({ text: "error" });
        if (data.length === 0) {
          container.innerHTML = "";
        } else if (data.length === 1) {
          container.innerHTML = `
          
            <div class="country">
    <h1>${data[0].name.official}</h1>
    <div class="country__content">
      <div class="country__info">
          <div class="">
           <h2>Capital:</h2>
           <p>${data[0].capital}</p>
          </div>
           <div class="">
            <h2>Population:</h2>
            <p>${data[0].population}</p>
           </div>
  
           <div class="">
              <h2>Languages:</h2>
               <ul class='country__languages'></ul>
           </div>
      </div>
  
      <img src="${data[0].flags.png}" alt="flag" class="country__image" />
    </div>
  </div>
            `;
          Object.values(data[0].languages).forEach((elem) =>
            document
              .querySelector(".country__languages")
              .insertAdjacentHTML("beforeend", `<li>${elem}</li>`)
          );
        } else {
          container.innerHTML = "<ul class='searching-countris'></ul>";
          data.forEach((elem) =>
            document
              .querySelector(".searching-countris")
              .insertAdjacentHTML("beforeend", `<li>${elem.name.official}</li>`)
          );
        }

        console.log(data);
      });
    //   .catch((error) => {
    //     alert({ text: error });
    //   });
  }, 500)
);
