const baseURL = "https://restcountries.com/v3.1/name/";

export default function fetchCountries(searchQuery) {
  return fetch(`${baseURL}${searchQuery}`);
}
