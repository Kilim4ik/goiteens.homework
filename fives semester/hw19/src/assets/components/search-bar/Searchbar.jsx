import { useContext, useRef } from "react";
import { GalleryContext } from "../../../context/galleryContext";

export default function Searchbar() {
  const { handleValue } = useContext(GalleryContext);
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    handleValue(inputRef.current.value);
  };
  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          ref={inputRef}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
  );
}
