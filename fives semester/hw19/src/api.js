import axios from "axios";
export const fetchData = async (value, page) => {
  const res = await axios.get(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=47618841-cf05a216298b2d642f212bb8d&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log("res - ", res);
  return res.data.hits;
};
