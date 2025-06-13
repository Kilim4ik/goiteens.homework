import { Component } from "react";

class Searchbar extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>

          <input
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
}
export default Searchbar;
